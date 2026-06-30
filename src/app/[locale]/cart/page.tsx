import { Suspense } from 'react';
import { connection } from 'next/server';
import { cookies } from 'next/headers';
import { getLocaleFromParams, getTranslationsSafe } from '@/i18n/server';
import { setRequestLocale } from 'next-intl/server';
import { Cart } from './cart';

export async function generateMetadata({
    params,
}: PageProps<'/[locale]/cart'>) {
    const locale = await getLocaleFromParams(params);
    const t = await getTranslationsSafe({ locale, namespace: 'Cart' });
    return {
        title: t('title'),
    };
}

export default async function CartPage({ params }: PageProps<'/[locale]/cart'>) {
    await connection();
    cookies(); // Force dynamic rendering
    const locale = await getLocaleFromParams(params);
    setRequestLocale(locale);
    const t = await getTranslationsSafe({ locale, namespace: 'Cart' });

    return (
        <div className="container mx-auto px-4 py-8 mt-16">
            <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>
            <Suspense fallback={<div className="p-8 text-center">{t('loading')}</div>}>
                <Cart locale={locale} />
            </Suspense>
        </div>
    );
}
