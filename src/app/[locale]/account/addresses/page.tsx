export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import { getRouteLocale } from '@/i18n/server';
import { query } from '@/lib/vendure/api';
import { GetCustomerAddressesQuery, GetAvailableCountriesQuery } from '@/lib/vendure/queries';
import { AddressesClient } from './addresses-client';
import { getTranslations } from 'next-intl/server';
import { connection } from 'next/server';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRouteLocale();
  const t = await getTranslations({ locale, namespace: 'Account' });

  return {
    title: t('addressesPageTitle'),
  };
}

export default async function AddressesPage() {
  await connection();
  const locale = await getRouteLocale();
  const t = await getTranslations({ locale, namespace: 'Account' });

  const [addressesResult, countriesResult] = await Promise.all([
    query(GetCustom
