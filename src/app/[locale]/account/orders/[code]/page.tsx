import type { Metadata } from 'next';
import { Suspense } from 'react';
import { query } from '@/lib/vendure/api';
import { GetOrderDetailQuery } from '@/lib/vendure/queries';
import { setRequestLocale } from 'next-intl/server';
import { getLocaleFromParams, getTranslationsSafe } from '@/i18n/server';
import { OrderDetail } from './order-detail';

type OrderDetailPageProps = PageProps<'/[locale]/account/orders/[code]'>;

export async function generateMetadata({ params }: OrderDetailPageProps): Promise<Metadata> {
    const { code } = await params;
    const locale = await getLocaleFromParams(params);
    const t = await getTranslationsSafe({ locale, namespace: 'Account' });
    return {
        title: t('order', { code }),
    };
}

export default async function OrderDetailPage({ params }: OrderDetailPageProps) {
    const locale = await getLocaleFromParams(params);
    setRequestLocale(locale);
    const t = await getTranslationsSafe({ locale, namespace: 'Common' });

    const orderPromise = params.then(({ code }) =>
        query(GetOrderDetailQuery, { code }, { useAuthToken: true, fetch: {} })
    );

    return (
        <Suspense fallback={<div className="p-8 text-center">{t('loading')}</div>}>
            <OrderDetail orderPromise={orderPromise} />
        </Suspense>
    );
}
