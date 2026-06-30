import type { Metadata } from 'next';
import { Suspense } from 'react';
import { query } from '@/lib/vendure/api';
import { GetActiveCustomerQuery } from '@/lib/vendure/queries';
import { setRequestLocale } from 'next-intl/server';
import { getLocaleFromParams, getTranslationsSafe } from '@/i18n/server';
import { ProfileClient } from './profile-client';
import { connection } from 'next/server';

export async function generateMetadata({
    params,
}: PageProps<'/[locale]/account/profile'>): Promise<Metadata> {
    const locale = await getLocaleFromParams(params);
    const t = await getTranslationsSafe({ locale, namespace: 'Account' });
    return {
        title: t('profile'),
    };
}

export default async function ProfilePage({ params }: PageProps<'/[locale]/account/profile'>) {
    await connection();
    const locale = await getLocaleFromParams(params);
    setRequestLocale(locale);
    const t = await getTranslationsSafe({ locale, namespace: 'Common' });

    const result = await query(GetActiveCustomerQuery, {}, { useAuthToken: true, languageCode: locale });
    const customer = result?.data?.activeCustomer ?? null;

    return (
        <Suspense fallback={<div className="p-8 text-center">{t('loading')}</div>}>
            <ProfileClient customer={customer} />
        </Suspense>
    );
}
