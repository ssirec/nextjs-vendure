import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { getLocaleFromParams, getTranslationsSafe } from '@/i18n/server';
import { query } from '@/lib/vendure/api';
import { GetCustomerAddressesQuery, GetAvailableCountriesQuery } from '@/lib/vendure/queries';
import { AddressesClient } from './addresses-client';
import { setRequestLocale } from 'next-intl/server';
import { connection } from 'next/server';

export async function generateMetadata({
    params,
}: PageProps<'/[locale]/account/addresses'>): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  const t = await getTranslationsSafe({ locale, namespace: 'Account' });

  return {
    title: t('addressesPageTitle'),
  };
}

export default async function AddressesPage({ params }: PageProps<'/[locale]/account/addresses'>) {
  await connection();
  cookies(); // Forces dynamic rendering
  const locale = await getLocaleFromParams(params);
  setRequestLocale(locale);
  const t = await getTranslationsSafe({ locale, namespace: 'Account' });

  const [addressesResult, countriesResult] = await Promise.all([
    query(GetCustomerAddressesQuery, {}, { useAuthToken: true, languageCode: locale }),
    query(GetAvailableCountriesQuery, {}, { languageCode: locale }),
  ]);

  const addresses = addressesResult?.data?.activeCustomer?.addresses || [];
  const countries = countriesResult?.data?.availableCountries || [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{t('addresses')}</h1>
        <p className="text-muted-foreground mt-2">
          {t('manageAddresses')}
        </p>
      </div>

      <AddressesClient addresses={addresses} countries={countries} />
    </div>
  );
}
