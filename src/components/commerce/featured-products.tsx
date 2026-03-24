import {ProductCarousel} from "@/components/commerce/product-carousel";
import {locale as rootLocale} from "next/root-params";
import {cacheLife, cacheTag} from "next/cache";
import {query} from "@/lib/vendure/api";
import {GetCollectionProductsQuery} from "@/lib/vendure/queries";
import { Link } from '@/i18n/navigation';
import {ArrowRight} from "lucide-react";
import {getTranslations} from 'next-intl/server';

async function getFeaturedCollectionProducts() {
    'use cache'
    cacheLife('days')

    const locale = (await rootLocale()) as string;
    cacheTag(`featured-${locale}`);

    // Fetch featured products from a specific collection
    // Replace 'featured' with your actual collection slug
    const result = await query(GetCollectionProductsQuery, {
        slug: "electronics",
        input: {
            collectionSlug: "electronics",
            take: 12,
            skip: 0,
            groupByProduct: true
        }
    }, {languageCode: locale});

    return result.data.search.items;
}


export async function FeaturedProducts() {
    const locale = (await rootLocale()) as string;
    const t = await getTranslations({locale, namespace: 'Product'});
    const products = await getFeaturedCollectionProducts();

    return (
        <div>
            <ProductCarousel
                title={t('featuredProducts')}
                products={products}
            />
            <div className="container mx-auto px-4 -mt-6 mb-8">
                <div className="flex justify-center">
                    <Link
                        href="/search"
                        className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors"
                    >
                        {t('viewAllProducts')}
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
