import type { Metadata } from 'next';
import { getRouteLocale } from '@/i18n/server';
import { getActiveCurrencyCode } from '@/lib/currency-server';
import { query } from '@/lib/vendure/api';
import {
    GetActiveOrderForCheckoutQuery,
    GetCustomerAddressesQuery,
    GetEligibleShippingMethodsQuery,
    GetEligiblePaymentMethodsQuery,
} from '@/lib/vendure/queries';
import { getAvailableCountriesCached } from '@/lib/vendure/cached';
import { getTranslations } from 'next-intl/server';
import { CheckoutContent } from './checkout-content';
import { connection } from 'next/server';

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getRouteLocale();
    const t = await getTranslations({ locale, namespace: 'Checkout' });
    return {
        title: t('pageTitle'),
    };
}

export default async function CheckoutPage() {
    await connection();
    const locale = await getRouteLocale();
    const currencyCode = await getActiveCurrencyCode();
    const t = await getTranslations({ locale, namespace: 'Checkout' });

    const isGuest = false;

    const [orderRes, addressesRes, countries, shippingMethodsRes, paymentMethodsRes] =
        await Promise.all([
            query(GetActiveOrderForCheckoutQuery, {}, {useAuthToken: true, currencyCode, languageCode: locale}),
            isGuest
                ? Promise.resolve({ data: { activeCustomer: null } })
                : query(GetCustomerAddressesQuery, {}, {useAuthToken: true, languageCode: locale}),
            getAvailableCountriesCached(locale),
            query(GetEligibleShippingMethodsQuery, {}, {useAuthToken: true, currencyCode, languageCode: locale}),
            query(GetEligiblePaymentMethodsQuery, {}, {useAuthToken: true, currencyCode, languageCode: locale}),
        ]);

    const activeOrder = orderRes.data.activeOrder;

    if (!activeOrder || activeOrder.lines.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-2xl font-bold mb-4">{t('cartEmpty')}</h1>
            </div>
        );
    }

    const addresses = addressesRes.data.activeCustomer?.addresses || [];
    const shippingMethods = (shippingMethodsRes.data.eligibleShippingMethods || []).map((m: any) => ({
        ...m,
        priceWithTax: Number(m.priceWithTax ?? 0),
    }));
    const paymentMethods =
        paymentMethodsRes.data.eligiblePaymentMethods?.filter((m) => m.isEligible) || [];

    return (
        <CheckoutContent
            activeOrder={activeOrder}
            addresses={addresses}
            countries={countries}
            shippingMethods={shippingMethods}
            paymentMethods={paymentMethods}
            currencyCode={currencyCode}
        />
    );
}
