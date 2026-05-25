import type { Metadata } from 'next';
import { Suspense } from 'react';
import { query } from '@/lib/vendure/api';
import { GetActiveCustomerQuery } from '@/lib/vendure/queries';
import { getTranslations } from 'next-intl/server';
import { getRouteLocale } from '@/i18n/server';
import { ProfileForm } from './profile-form';

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getRouteLocale();
    const t = await getTranslations({ locale, namespace: 'Account' });
    return {
        title: t('profile'),
    };
}

export default async function ProfilePage() {
    const locale = await getRouteLocale();
    const t = await getTranslations({ locale, namespace: 'Common' });

    const customerPromise = query(GetActiveCustomerQuery, {}, { useAuthToken: true, fetch: {} });

    return (
        <Suspense fallback={<div className="p-8 text-center">{t('loading')}</div>}>
            <ProfileForm customerPromise={customerPromise} />
        </Suspense>
    );
}
