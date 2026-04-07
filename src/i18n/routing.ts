import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'de', 'sl', 'it'],
    defaultLocale: 'sl',
});

export type Locale = (typeof routing.locales)[number];

export const localeNames: Record<Locale, string> = {
    en: 'English',
    de: 'Deutsch',
    sl: 'Slovenščina',
    it: 'Italiano',
};
