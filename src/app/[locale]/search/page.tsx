import type {Metadata} from 'next';
import {Suspense} from 'react';
import {getLocaleFromParams, getTranslationsSafe} from '@/i18n/server';
import {SearchResults} from "@/app/[locale]/search/search-results";
import {SearchTerm, SearchTermSkeleton} from "@/app/[locale]/search/search-term";
import {SearchResultsSkeleton} from "@/components/shared/skeletons/search-results-skeleton";
import {SITE_NAME, noIndexRobots} from '@/lib/metadata';

export async function generateMetadata({
    searchParams,
    params,
}: PageProps<'/[locale]/search'>): Promise<Metadata> {
    const resolvedParams = await searchParams;
    const locale = await getLocaleFromParams(params);
    const t = await getTranslationsSafe({locale, namespace: 'Search'});
    const searchQuery = resolvedParams.q as string | undefined;

    const title = searchQuery
        ? t('resultsTitle', {query: searchQuery})
        : t('pageTitle');

    return {
        title,
        description: searchQuery
            ? t('metaDescription', {query: searchQuery, siteName: SITE_NAME})
            : t('metaCatalogDescription', {siteName: SITE_NAME}),
        robots: noIndexRobots(),
    };
}

export default async function SearchPage({searchParams, params}: PageProps<'/[locale]/search'>) {
    const locale = await getLocaleFromParams(params);

    return (
        <div className="container mx-auto px-4 py-8 mt-16">
            <Suspense fallback={<SearchTermSkeleton/>}>
                <SearchTerm searchParams={searchParams} locale={locale} />
            </Suspense>
            <Suspense fallback={<SearchResultsSkeleton />}>
                <SearchResults searchParams={searchParams} locale={locale} />
            </Suspense>
        </div>
    );
}
