import {getCurrencyCookie} from './currency';
import {getActiveChannelCached} from './vendure/cached';

/**
 * Get the active currency code for the current request.
 * Reads from cookie, falls back to channel default.
 *
 * NOT safe inside 'use cache' functions — pass currency as a parameter instead.
 * Server actions should use getCurrencyCookie() from '@/lib/currency' instead,
 * since they run outside the cached RSC tree and have full request context.
 */
export async function getActiveCurrencyCode(): Promise<string> {
    const cookieValue = await getCurrencyCookie();
    if (cookieValue) return cookieValue;

    const channel = await getActiveChannelCached();
    return channel.defaultCurrencyCode;
}
