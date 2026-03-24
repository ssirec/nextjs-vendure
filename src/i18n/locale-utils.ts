const OG_LOCALE_MAP: Record<string, string> = { en: 'en_US', de: 'de_DE' };
const INTL_LOCALE_MAP: Record<string, string> = { en: 'en-US', de: 'de-DE' };

export function toOgLocale(locale: string): string {
    return OG_LOCALE_MAP[locale] || 'en_US';
}

export function toIntlLocale(locale: string): string {
    return INTL_LOCALE_MAP[locale] || 'en-US';
}
