import type { Metadata } from 'next';
import { getRouteLocale } from '@/i18n/server';
import { query } from '@/lib/vendure/api';
import { GetCustomerOrdersQuery } from '@/lib/vendure/queries';
import { OrderListClient } from './order-list-client';
import { getTranslations } from 'next-intl/server';
import { formatDate } from '@/lib/format';
import { Price } from '@/components/commerce/price';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRouteLocale();
  const t = await getTranslations({ locale, namespace: 'Account' });

  return {
    title: t('ordersPageTitle'),
  };
}

export default async function OrdersPage() {
  const locale = await getRouteLocale();
  const t = await getTranslations({ locale, namespace: 'Account' });

  const result = await query(GetCustomerOrdersQuery, {}, { useAuthToken: true, languageCode: locale });
  const orders = result.data.activeCustomer?.orders || [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{t('orders')}</h1>
        <p className="text-muted-foreground mt-2">{t('manageOrders')}</p>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.code} className="p-4 border rounded-md">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-medium">{t('order', { code: order.code })}</h2>
                <span className="text-muted-foreground">
                  {formatDate(order.createdAt as string, 'short', locale)}
                </span>
              </div>
              <div className="text-right">
                <div className="font-medium text-base">
                  <Price value={order.totalWithTax as number} currencyCode={order.currencyCode} />
                </div>
                <div className="text-sm text-muted-foreground">{order.state}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <OrderListClient orders={orders} />
    </div>
  );
}
