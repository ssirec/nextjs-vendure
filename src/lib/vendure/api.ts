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

/**
 * Execute a GraphQL query against the Vendure API
 * Returns null if the API is unavailable (e.g. during static generation in CI)
 */
export async function query<TResult, TVariables>(
  document: TadaDocumentNode<TResult, TVariables>,
  ...[variables, options]: TVariables extends Record<string, never>
    ? [variables?: TVariables, options?: VendureRequestOptions]
    : [variables: TVariables, options?: VendureRequestOptions]
): Promise<{ data: TResult; token?: string } | null> {
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

  try {
    const response = await fetch(url.toString(), {
      ...fetchOptions,
      method: 'POST',
      headers,
      body: JSON.stringify({ query: print(document), variables: variables || {} }),
      ...(tags && { next: { tags } }),
    });

    if (!response.ok) {
      console.error(`Vendure API HTTP error: ${response.status}`);
      return null;
    }

    const text = await response.text();
    const trimmed = text.trim();

    if (trimmed.startsWith('<!') || trimmed.startsWith('<html') || trimmed.startsWith('<HTML')) {
      console.error('Vendure API returned HTML instead of JSON');
      return null;
    }

    let result: VendureResponse<TResult>;
    try {
      result = JSON.parse(text);
    } catch {
      console.error('Vendure API returned invalid JSON');
      return null;
    }

    if (result.errors) {
      console.error(`Vendure GraphQL errors: ${result.errors.map(e => e.message).join(', ')}`);
      return null;
    }

    if (!result.data) {
      console.error('No data returned from Vendure API');
      return null;
    }

    const newToken = extractAuthToken(response.headers);
    return { data: result.data, ...(newToken && { token: newToken }) };
  } catch (error) {
    console.error('Vendure API request failed:', error);
    return null;
  }
}

/**
 * Execute a GraphQL mutation against the Vendure API
 */
export async function mutate<TResult, TVariables>(
  document: TadaDocumentNode<TResult, TVariables>,
  ...[variables, options]: TVariables extends Record<string, never>
    ? [variables?: TVariables, options?: VendureRequestOptions]
    : [variables: TVariables, options?: VendureRequestOptions]
): Promise<{ data: TResult; token?: string } | null> {
  // Reuse query implementation for mutations
  // @ts-expect-error - Complex conditional type inference, runtime behavior is correct
  return query(document, variables, options);
}
