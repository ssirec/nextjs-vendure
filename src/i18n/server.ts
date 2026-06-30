import {hasLocale} from 'next-intl';
import {routing} from './routing';

type Params = Promise<{locale: string}>;

function resolveLocale(loc: string): string {
    return hasLocale(routing.locales, loc) ? loc : routing.defaultLocale;
}

/**
 * Extract locale from route params (for page components and generateMetadata).
 */
export async function getLocaleFromParams(params: Params): Promise<string> {
    const {locale} = await params;
    return resolveLocale(locale);
}

/**
 * Dynamic import wrapper for getTranslations to prevent webpack tree-shaking.
 */
export async function getTranslationsSafe(options: {locale: string; namespace: string}) {
    const mod = await import('next-intl/server');
    return mod.getTranslations(options);
}

/**
 * Resolve locale from request context (for server actions, components without params).
 * Falls back to defaultLocale if unavailable.
 */
export async function getRouteLocale(): Promise<string> {
    try {
        const mod = await import('next-intl/server');
        const loc = await mod.getLocale();
        return resolveLocale(loc);
    } catch {
        return routing.defaultLocale;
    }
}
