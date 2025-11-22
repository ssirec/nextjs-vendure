import {Suspense} from 'react';
import {query} from '@/lib/vendure/api';
import {SearchProductsQuery} from '@/lib/vendure/queries';
import {ProductGrid} from '@/components/product-grid';
import {FacetFilters} from '@/components/facet-filters';
import {ProductGridSkeleton} from '@/components/product-grid-skeleton';
import {buildSearchInput, getCurrentPage} from '@/lib/search-helpers';
import {SearchResults} from "@/app/search/search-results";
import * as sea from "node:sea";
import {SearchTerm, SearchTermSkeleton} from "@/app/search/search-term";

interface SearchPageProps {
    params: Promise<{ locale: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function SearchPage({params, searchParams}: SearchPageProps) {
    return (
        <div className="container mx-auto px-4 py-8 mt-16">
            <Suspense fallback={<SearchTermSkeleton/>}>
                <SearchTerm searchParams={searchParams}/>
            </Suspense>
            <Suspense>
                <SearchResults searchParams={searchParams}/>
            </Suspense>
        </div>
    );
}
