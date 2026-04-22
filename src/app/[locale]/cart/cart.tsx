'use client';

import React from 'react';
import { CartItems } from './cart-items';
import { OrderSummary } from './order-summary';
import type { ResultOf } from '@/graphql';
import type { GetActiveOrderQuery } from '@/lib/vendure/queries';

/**
 * Lokalni tipi, ki jih uporablja UI (poenostavljena/narrowed shape).
 * Namen: normalizirati polja, ki jih codegen tipizira kot unknown/optional.
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
      featuredAsset?: { preview: string } | null;
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
  currencyCode: string; // vedno string po normalizaciji
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
  const raw = (activeOrder as unknown) as Partial<ActiveOrderShape> | null;

  if (!raw) {
    return (
      <div className="text-sm text-muted-foreground">
        Your cart is empty.
      </div>
    );
  }

  // Normalize numeric fields and ensure currencyCode and featuredAsset.preview are proper strings
  const normalizedOrder: ActiveOrderShape = {
    id: String(raw.id ?? ''),
    code: raw.code,
    state: raw.state,
    totalQuantity: Number((raw as any).totalQuantity ?? 0),
    subTotalWithTax: Number((raw as any).subTotalWithTax ?? 0),
    shippingWithTax: Number((raw as any).shippingWithTax ?? 0),
    totalWithTax: Number((raw as any).totalWithTax ?? 0),
    currencyCode: String(raw.currencyCode ?? 'USD'),
    couponCodes: (raw as any).couponCodes ?? [],
    discounts: (raw as any).discounts ?? null,
    lines: ((raw as any).lines ?? []).map((l: any) => ({
      id: String(l.id),
      quantity: Number(l.quantity ?? 0),
      unitPriceWithTax: Number(l.unitPriceWithTax ?? 0),
      linePriceWithTax: Number(l.linePriceWithTax ?? 0),
      productVariant: {
        id: String(l.productVariant?.id ?? ''),
        name: String(l.productVariant?.name ?? ''),
        sku: String(l.productVariant?.sku ?? ''),
        product: {
          name: String(l.productVariant?.product?.name ?? ''),
          slug: String(l.productVariant?.product?.slug ?? ''),
          featuredAsset: l.productVariant?.product?.featuredAsset
            ? { preview: String(l.productVariant.product.featuredAsset.preview ?? '') }
            : null,
        },
      },
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
