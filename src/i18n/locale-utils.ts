import {routing, type Locale} from './routing';

const OG_LOCALE_MAP: Record<Locale, string> = { 
    en: 'en_US', 
    de: 'de_DE', 
    sl: 'sl_SI', 
    it: 'it_IT' 
};
const INTL_LOCALE_MAP: Record<Locale, string> = { 
    en: 'en-US', 
    de: 'de-DE', 
    sl: 'sl-SI', 
    it: 'it-IT' 
};

export function toOgLocale(locale: string): string {
    return OG_LOCALE_MAP[locale as Locale] || 'en_US';
}

export function toIntlLocale(locale: string): string {
    return INTL_LOCALE_MAP[locale as Locale] || 'en-US';
}
