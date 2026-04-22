'use client';

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Price } from '@/components/commerce/price';
import { formatDate } from '@/lib/format';
import type { ResultOf } from '@/graphql';
import type { GetCustomerOrdersQuery } from '@/lib/vendure/queries';

type ActiveCustomer = NonNullable<ResultOf<typeof GetCustomerOrdersQuery>['activeCustomer']>;
type OrderItem = ActiveCustomer['orders'][number];

interface OrderListClientProps {
  orders: OrderItem[];
}

export function OrderListClient({ orders }: OrderListClientProps) {
  const t = useTranslations('Account');
  const locale = useLocale();

  if (!orders || orders.length === 0) {
    return (
      <div className="text-sm text-muted-foreground">
        {t('noOrders')}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {orders.map((order) => (
        <div key={order.code} className="p-3 border rounded-md flex items-center justify-between">
          <div>
            <Link href={`/account/orders/${order.code}`} className="font-medium hover:underline">
              {t('order', { code: order.code })}
            </Link>
            <div className="text-sm text-muted-foreground">
              {formatDate(order.createdAt as string, 'short', locale)}
            </div>
          </div>

          <div className="text-right">
            <div className="font-medium">
              <Price value={order.totalWithTax as number} currencyCode={order.currencyCode} />
            </div>
            <div className="text-sm text-muted-foreground">{order.state}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
