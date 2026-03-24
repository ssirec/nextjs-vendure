import {locale as rootLocale} from 'next/root-params';
import {hasLocale} from 'next-intl';
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async () => {
    // Use rootLocale() instead of requestLocale to avoid headers() access,
    // which breaks with cacheComponents: true (all RSCs are auto-cached).
    const requested = (await rootLocale()) as string;
    const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default,
    };
});
