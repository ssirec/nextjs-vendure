import type { TadaDocumentNode } from 'gql.tada';
import { print } from 'graphql';
import { getAuthToken } from '@/lib/auth';

const VENDURE_API_URL =
  process.env.VENDURE_SHOP_API_URL ||
  process.env.NEXT_PUBLIC_VENDURE_SHOP_API_URL;

const VENDURE_CHANNEL_TOKEN =
  process.env.VENDURE_CHANNEL_TOKEN ||
  process.env.NEXT_PUBLIC_VENDURE_CHANNEL_TOKEN ||
  '__default_channel__';

const VENDURE_AUTH_TOKEN_HEADER =
  process.env.VENDURE_AUTH_TOKEN_HEADER || 'vendure-auth-token';

const VENDURE_CHANNEL_TOKEN_HEADER =
  process.env.VENDURE_CHANNEL_TOKEN_HEADER || 'vendure-token';

const VENDURE_LOCALE_HEADER =
  process.env.VENDURE_LOCALE_HEADER || 'Accept-Language';

if (!VENDURE_API_URL) {
  throw new Error(
    'VENDURE_SHOP_API_URL or NEXT_PUBLIC_VENDURE_SHOP_API_URL environment variable is not set'
  );
}

interface VendureRequestOptions {
  token?: string;
  useAuthToken?: boolean;
  channelToken?: string;
  languageCode?: string;
  currencyCode?: string;
  fetch?: RequestInit;
  tags?: string[];
}

interface VendureResponse<T> {
  data?: T;
  errors?: Array<{ message: string; [key: string]: unknown }>;
}

function extractAuthToken(headers: Headers): string | null {
  return headers.get(VENDURE_AUTH_TOKEN_HEADER);
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const MAX_RETRIES = 3;
const RETRY_DELAYS = [1000, 3000, 5000];

/**
 * Execute a GraphQL query against the Vendure API with retry logic
 */
export async function query<TResult, TVariables>(
  document: TadaDocumentNode<TResult, TVariables>,
  ...[variables, options]: TVariables extends Record<string, never>
    ? [variables?: TVariables, options?: VendureRequestOptions]
    : [variables: TVariables, options?: VendureRequestOptions]
): Promise<{ data: TResult; token?: string }> {
  const { token, useAuthToken, channelToken, languageCode, currencyCode, fetch: fetchOptions, tags } =
    options || {};

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(fetchOptions?.headers as Record<string, string>),
  };

  let authToken = token;
  if (useAuthToken && !authToken) {
    authToken = await getAuthToken();
  }
  if (authToken) {
    headers['Authorization'] = `Bearer ${authToken}`;
  }

  headers[VENDURE_CHANNEL_TOKEN_HEADER] = channelToken || VENDURE_CHANNEL_TOKEN;

  if (languageCode) {
    headers[VENDURE_LOCALE_HEADER] = languageCode;
  }

  const url = new URL(VENDURE_API_URL!);
  if (languageCode) {
    url.searchParams.set('languageCode', languageCode);
  }
  if (currencyCode) {
    url.searchParams.set('currencyCode', currencyCode);
  }

  const body = JSON.stringify({ query: print(document), variables: variables || {} });

  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await fetch(url.toString(), {
        ...fetchOptions,
        method: 'POST',
        headers,
        body,
        ...(tags && { next: { tags } }),
      });

      if (!response.ok) {
        lastError = new Error(`HTTP error! status: ${response.status}`);
        if (attempt < MAX_RETRIES) {
          console.warn(`Vendure API HTTP ${response.status}, retry ${attempt + 1}/${MAX_RETRIES}...`);
          await sleep(RETRY_DELAYS[attempt]);
          continue;
        }
        throw lastError;
      }

      const text = await response.text();
      const trimmed = text.trim();

      // API returned HTML instead of JSON — retry
      if (trimmed.startsWith('<!') || trimmed.startsWith('<html') || trimmed.startsWith('<HTML')) {
        lastError = new Error(`Vendure API returned HTML instead of JSON`);
        if (attempt < MAX_RETRIES) {
          console.warn(`Vendure API returned HTML, retry ${attempt + 1}/${MAX_RETRIES}...`);
          await sleep(RETRY_DELAYS[attempt]);
          continue;
        }
        throw lastError;
      }

      let result: VendureResponse<TResult>;
      try {
        result = JSON.parse(text);
      } catch {
        lastError = new Error(`Vendure API returned invalid JSON`);
        if (attempt < MAX_RETRIES) {
          console.warn(`Vendure API invalid JSON, retry ${attempt + 1}/${MAX_RETRIES}...`);
          await sleep(RETRY_DELAYS[attempt]);
          continue;
        }
        throw lastError;
      }

      if (result.errors) {
        throw new Error(result.errors.map(e => e.message).join(', '));
      }

      if (!result.data) {
        throw new Error('No data returned from Vendure API');
      }

      const newToken = extractAuthToken(response.headers);
      return { data: result.data, ...(newToken && { token: newToken }) };
    } catch (error) {
      if (error instanceof Error && attempt < MAX_RETRIES && !error.message.includes('No data returned') && !error.message.includes('GraphQL')) {
        console.warn(`Vendure API request failed, retry ${attempt + 1}/${MAX_RETRIES}: ${error.message}`);
        await sleep(RETRY_DELAYS[attempt]);
        continue;
      }
      throw error;
    }
  }

  throw lastError || new Error('Vendure API request failed after retries');
}

/**
 * Execute a GraphQL mutation against the Vendure API
 */
export async function mutate<TResult, TVariables>(
  document: TadaDocumentNode<TResult, TVariables>,
  ...[variables, options]: TVariables extends Record<string, never>
    ? [variables?: TVariables, options?: VendureRequestOptions]
    : [variables: TVariables, options?: VendureRequestOptions]
): Promise<{ data: TResult; token?: string }> {
  // Reuse query implementation for mutations
  // @ts-expect-error - Complex conditional type inference, runtime behavior is correct
  return query(document, variables, options);
}
