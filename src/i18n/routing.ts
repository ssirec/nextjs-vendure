import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'de'],
    defaultLocale: 'en',
});

export const localeNames: Record<string, string> = {
    en: 'English',
    de: 'Deutsch',
};
