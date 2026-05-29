export const dynamic = 'force-dynamic';

import { Suspense } from 'react';
import { connection } from 'next/server';
import { getRouteLocale } from '@/i18n/server';
import { getTranslations } from 'next-intl/server';
import { Cart } from './cart';

export async function generateMetadata() {
    const locale = await getRouteLocale();
    const t = await getTranslations({ locale, namespace: 'Cart' });
    return {
        title: t('title'),
    };
}

export default async function CartPage() {
    await connection();
    const locale = await getRouteLocale();
    const t = await getTranslations({ locale, namespace: 'Cart' });

    return (
        <div className="container mx-auto px-4 py-8 mt-16">
            <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>
            <Suspense fallback={<div className="p-8 text-center">{t('loading')}</div>}>
                <Cart locale={locale} />
            </Suspense>
        </div>
    );
}
