import {getTranslationsSafe} from '@/i18n/server';

interface SearchTermProps {
    searchParams: Promise<{
        q?: string
    }>;
    locale: string;
}

export async function SearchTerm({searchParams, locale}: SearchTermProps) {
    const searchParamsResolved = await searchParams;
    const searchTerm = (searchParamsResolved.q as string) || '';
    const t = await getTranslationsSafe({locale, namespace: 'Search'});

    if (!searchTerm) {
        return null;
    }

    return (
        <div className="mb-6">
            <h1 className="text-3xl font-bold">
                {t('resultsFor', {query: searchTerm})}
            </h1>
        </div>
    )
}

export function SearchTermSkeleton() {
    return (
        <div className="mb-6">
            <div className="h-9 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>
    )
}
