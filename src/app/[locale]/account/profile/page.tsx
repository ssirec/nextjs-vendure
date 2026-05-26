import type { Metadata } from 'next';
import { Suspense } from 'react';
import { query } from '@/lib/vendure/api';
import { GetActiveCustomerQuery } from '@/lib/vendure/queries';
import { getTranslations } from 'next-intl/server';
import { getRouteLocale } from '@/i18n/server';
import { ProfileClient } from './profile-client';
import { connection } from 'next/server';

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getRouteLocale();
    const t = await getTranslations({ locale, namespace: 'Account' });
    return {
        title: t('profile'),
    };
}

export default async function ProfilePage() {
    await connection();
    const locale = await getRouteLocale();
    const t = await getTranslations({ locale, namespace: 'Common' });

    const result = await query(GetActiveCustomerQuery, {}, { useAuthToken: true, languageCode: locale });
    const customer = result?.data?.activeCustomer ?? null;

    return (
        <Suspense fallback={<div className="p-8 text-center">{t('loading')}</div>}>
            <ProfileClient customer={customer} />
        </Suspense>
    );
}
