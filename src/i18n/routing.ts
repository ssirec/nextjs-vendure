import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'de', 'sl', 'it', 'hr', 'fr', 'es'],
    defaultLocale: 'sl',
});

export type Locale = (typeof routing.locales)[number];

export const localeNames: Record<Locale, string> = {
    en: 'English',
    de: 'Deutsch',
    sl: 'Slovenščina',
    it: 'Italiano',
    hr: 'Hrvatski',
    fr: 'Français',
    es: 'Español',
};
