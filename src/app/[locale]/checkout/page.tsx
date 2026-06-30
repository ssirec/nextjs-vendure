import type { Metadata } from 'next';
import { connection } from 'next/server';
import { Suspense } from 'react';
import { getLocaleFromParams, getTranslationsSafe } from '@/i18n/server';
import { getActiveCurrencyCode } from '@/lib/currency-server';
import { query } from '@/lib/vendure/api';
import {
    GetActiveOrderForCheckoutQuery,
    GetCustomerAddressesQuery,
    GetEligibleShippingMethodsQuery,
    GetEligiblePaymentMethodsQuery,
} from '@/lib/vendure/queries';
import { getAvailableCountriesCached } from '@/lib/vendure/cached';
import { setRequestLocale } from 'next-intl/server';
import CheckoutFlow from './checkout-flow';
import { CheckoutProvider } from './checkout-provider';

export async function generateMetadata({
    params,
}: PageProps<'/[locale]/checkout'>): Promise<Metadata> {
    const locale = await getLocaleFromParams(params);
    const t = await getTranslationsSafe({ locale, namespace: 'Checkout' });
    return {
        title: t('pageTitle'),
    };
}

export default async function CheckoutPage({ params }: PageProps<'/[locale]/checkout'>) {
    await connection();
    const locale = await getLocaleFromParams(params);
    setRequestLocale(locale);
    const currencyCode = await getActiveCurrencyCode();

    const [orderRes, addressesRes, countries, shippingMethodsRes, paymentMethodsRes] =
        await Promise.all([
            query(GetActiveOrderForCheckoutQuery, {}, { useAuthToken: true, currencyCode, languageCode: locale }),
            query(GetCustomerAddressesQuery, {}, { useAuthToken: true, languageCode: locale }),
            getAvailableCountriesCached(locale),
            query(GetEligibleShippingMethodsQuery, {}, { useAuthToken: true, currencyCode, languageCode: locale }),
            query(GetEligiblePaymentMethodsQuery, {}, { useAuthToken: true, currencyCode, languageCode: locale }),
        ]);

    const activeOrder = orderRes?.data?.activeOrder;

    if (!activeOrder || activeOrder.lines.length === 0) {
        const t = await getTranslationsSafe({ locale, namespace: 'Checkout' });
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-2xl font-bold mb-4">{t('cartEmpty')}</h1>
            </div>
        );
    }

    const addresses = addressesRes?.data?.activeCustomer?.addresses || [];
    const shippingMethods = shippingMethodsRes?.data?.eligibleShippingMethods || [];
    const paymentMethods =
        paymentMethodsRes?.data?.eligiblePaymentMethods?.filter((m) => m.isEligible) || [];

    return (
        <CheckoutProvider order={activeOrder} shippingMethods={shippingMethods} paymentMethods={paymentMethods} countries={countries} addresses={addresses}>
            <CheckoutFlow />
        </CheckoutProvider>
    );
}
