import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getLocaleFromParams, getTranslationsSafe } from '@/i18n/server';
import { OrderConfirmation } from './order-confirmation';
import { noIndexRobots } from '@/lib/metadata';

export async function generateMetadata({
    params,
}: PageProps<'/[locale]/order-confirmation/[code]'>): Promise<Metadata> {
    const locale = await getLocaleFromParams(params);
    const t = await getTranslationsSafe({ locale, namespace: 'OrderConfirmation' });
    return {
        title: t('pageTitle'),
        robots: noIndexRobots(),
    };
}

export default async function OrderConfirmationPage({ params }: PageProps<'/[locale]/order-confirmation/[code]'>) {
    const locale = await getLocaleFromParams(params);

    return (
        <Suspense fallback={<div className="container mx-auto px-4 py-16 text-center">Loading...</div>}>
            <OrderConfirmation paramsPromise={params} />
        </Suspense>
    );
}
