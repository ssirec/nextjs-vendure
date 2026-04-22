'use client';

import React from 'react';
import { CartItems } from './cart-items';
import { OrderSummary } from './order-summary';
import type { ResultOf } from '@/graphql';
import type { GetActiveOrderQuery } from '@/lib/vendure/queries';

/**
 * Narrowed runtime shape used by the UI components.
 * The GraphQL codegen in this repo produces fragment-ref / unknown numeric fields,
 * so we cast and normalize numeric fields to satisfy TypeScript.
 */
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
  const raw = (activeOrder as unknown) as ActiveOrderShape | null;

  if (!raw) {
    return (
      <div className="text-sm text-muted-foreground">
        Your cart is empty.
      </div>
    );
  }

  // Normalize numeric fields that may be typed as unknown by codegen
  const normalizedOrder: ActiveOrderShape = {
    ...raw,
    subTotalWithTax: Number(raw.subTotalWithTax ?? 0),
    shippingWithTax: Number(raw.shippingWithTax ?? 0),
    totalWithTax: Number(raw.totalWithTax ?? 0),
    lines: (raw.lines || []).map((l) => ({
      ...l,
      quantity: Number(l.quantity ?? 0),
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
