import type { Metadata } from 'next';
import { getRouteLocale } from '@/i18n/server';
import { query } from '@/lib/vendure/api';
import { GetActiveCustomerQuery } from '@/lib/vendure/queries';
import { ProfileClient } from './profile-client';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRouteLocale();
  const t = await getTranslations({ locale, namespace: 'Account' });

  return {
    title: t('profilePageTitle'),
  };
}

export default async function ProfilePage() {
  const locale = await getRouteLocale();
  const t = await getTranslations({ locale, namespace: 'Account' });

  const result = await query(GetActiveCustomerQuery, {}, { useAuthToken: true, languageCode: locale });
  const customer = result.data.activeCustomer;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{t('profile')}</h1>
        <p className="text-muted-foreground mt-2">{t('manageProfile')}</p>
      </div>

      <ProfileClient customer={customer} />
    </div>
  );
}
