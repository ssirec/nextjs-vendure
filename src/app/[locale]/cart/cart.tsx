'use client';

import React from 'react';
import { CartItems } from './cart-items';
import { OrderSummary } from './order-summary';
import type { ResultOf } from '@/graphql';
import type { GetActiveOrderQuery } from '@/lib/vendure/queries';

/**
 * The GraphQL codegen in this project produces fragment-ref / unknown numeric fields.
 * To satisfy TypeScript for the UI components, we narrow the incoming shape to a plain
 * object with numeric price fields. This keeps runtime behavior unchanged while fixing
 * the type errors during build.
 */

/* Minimal shape used by CartItems / OrderSummary */
type LineItemShape = {
  id: string;
  quantity: number;
  unitPriceWithTax: number;
  linePriceWithTax: number;
  productVariant: {
    id: string;
    name: string;
    sku: string;
    product: {
      name: string;
      slug: string;
      featuredAsset?: { preview?: string } | null;
    };
  };
};

type ActiveOrderShape = {
  id: string;
  code?: string;
  state?: string;
  totalQuantity?: number;
  subTotalWithTax?: number;
  shippingWithTax?: number;
  totalWithTax?: number;
  currencyCode?: string;
  couponCodes?: string[];
  discounts?: { description?: string; amountWithTax?: number }[] | null;
  lines: LineItemShape[];
};

type ActiveOrderRaw = NonNullable<ResultOf<typeof GetActiveOrderQuery>['activeOrder']> | null;

interface CartProps {
  activeOrder: ActiveOrderRaw;
}

export function Cart({ activeOrder }: CartProps) {
  // Cast the generated/fragment-ref type into our plain shape.
  // We defensively convert numeric fields that may be typed as `unknown`.
  const order = (activeOrder as unknown) as ActiveOrderShape | null;

  if (!order) {
    return (
      <div className="text-sm text-muted-foreground">
        Your cart is empty.
      </div>
    );
  }

  // Ensure numeric fields are numbers at runtime (fallback to 0)
  const normalizedOrder: ActiveOrderShape = {
    ...order,
    subTotalWithTax: Number(order.subTotalWithTax ?? 0),
    shippingWithTax: Number(order.shippingWithTax ?? 0),
    totalWithTax: Number(order.totalWithTax ?? 0),
    lines: (order.lines || []).map((l) => ({
      ...l,
      unitPriceWithTax: Number((l as any).unitPriceWithTax ?? 0),
      linePriceWithTax: Number((l as any).linePriceWithTax ?? 0),
    })),
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <CartItems activeOrder={normalizedOrder} />
      <div className="lg:col-span-1">
        <OrderSummary activeOrder={normalizedOrder} />
      </div>
    </div>
  );
}
