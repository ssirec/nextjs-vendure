'use client';

import React from 'react';
import Image from 'next/image';
import { Price } from '@/components/commerce/price';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { adjustQuantity, removeFromCart } from './actions';
import type { ActiveOrderShape } from './types'; // optional: if you created a shared types file

interface CartItemsProps {
  activeOrder: any; // kept loose because codegen produces fragment refs; we normalize below
}

export function CartItems({ activeOrder }: CartItemsProps) {
  const t = useTranslations('Cart');

  if (!activeOrder || !activeOrder.lines || activeOrder.lines.length === 0) {
    return <div className="text-sm text-muted-foreground">{t('emptyCart')}</div>;
  }

  // Normalize numeric fields that may be typed as unknown by codegen
  const normalized = {
    ...activeOrder,
    lines: (activeOrder.lines || []).map((l: any) => ({
      ...l,
      unitPriceWithTax: Number(l.unitPriceWithTax ?? 0),
      linePriceWithTax: Number(l.linePriceWithTax ?? 0),
      quantity: Number(l.quantity ?? 0),
    })),
  };

  return (
    <div className="space-y-4">
      {normalized.lines.map((line: any) => (
        <div key={line.id} className="flex items-center gap-4 p-4 border rounded-md">
          <div className="relative h-20 w-20 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
            {line.productVariant?.product?.featuredAsset?.preview && (
              <Image
                src={line.productVariant.product.featuredAsset.preview}
                alt={line.productVariant.name || ''}
                fill
                className="object-cover"
              />
            )}
          </div>

          <div className="flex-1">
            <Link href={`/product/${line.productVariant.product.slug}`} className="font-medium hover:underline">
              {line.productVariant.product.name}
            </Link>
            <p className="text-sm text-muted-foreground">{line.productVariant.name}</p>
            <p className="text-sm text-muted-foreground">{t('skuLabel', { sku: line.productVariant.sku })}</p>
          </div>

          <div className="text-right space-y-2">
            <div className="font-medium">
              <Price value={line.linePriceWithTax as number} currencyCode={normalized.currencyCode} />
            </div>

            {/* Quantity update form using exported server action */}
            <form
              action={() => adjustQuantity(line.id, Math.max(1, line.quantity - 1))}
              className="inline"
            >
              <button type="submit" className="px-2 py-1 border rounded-md mr-2">-</button>
            </form>

            <span className="inline-block px-2">{line.quantity}</span>

            <form
              action={() => adjustQuantity(line.id, line.quantity + 1)}
              className="inline"
            >
              <button type="submit" className="px-2 py-1 border rounded-md ml-2">+</button>
            </form>

            {/* Remove line form using exported server action */}
            <form
              action={() => removeFromCart(line.id)}
            >
              <button type="submit" className="text-sm text-red-600 mt-2">Remove</button>
            </form>

            <div className="text-sm text-muted-foreground">
              <Price value={line.unitPriceWithTax as number} currencyCode={normalized.currencyCode} /> {t('each')}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import {Button} from '@/components/ui/button';
import {Minus, Plus, X} from 'lucide-react';
import {Price} from '@/components/commerce/price';
import {removeFromCart, adjustQuantity} from './actions';
import {getTranslations} from 'next-intl/server';

type ActiveOrder = {
    id: string;
    currencyCode: string;
    lines: Array<{
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
                featuredAsset?: {
                    preview: string;
                } | null;
            };
        };
    }>;
};

export async function CartItems({activeOrder}: { activeOrder: ActiveOrder | null }) {
    const t = await getTranslations('Cart');
    if (!activeOrder || activeOrder.lines.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">{t('empty')}</h1>
                    <p className="text-muted-foreground mb-8">
                        {t('emptyMessage')}
                    </p>
                    <Button render={<Link href="/" />} nativeButton={false}>{t('continueShopping')}</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="lg:col-span-2 divide-y divide-border">
            {activeOrder.lines.map((line) => (
                <div
                    key={line.id}
                    className="flex flex-col sm:flex-row gap-4 p-4 first:rounded-t-xl last:rounded-b-xl border-x first:border-t last:border-b bg-card transition-colors duration-200 hover:bg-muted/30"
                >
                    {line.productVariant.product.featuredAsset && (
                        <Link
                            href={`/product/${line.productVariant.product.slug}`}
                            className="flex-shrink-0"
                        >
                            <Image
                                src={line.productVariant.product.featuredAsset.preview}
                                alt={line.productVariant.name}
                                width={120}
                                height={120}
                                className="rounded-xl object-cover w-full sm:w-[120px] h-[120px]"
                            />
                        </Link>
                    )}

                    <div className="flex-grow min-w-0">
                        <Link
                            href={`/product/${line.productVariant.product.slug}`}
                            className="font-semibold hover:underline block"
                        >
                            {line.productVariant.product.name}
                        </Link>
                        {line.productVariant.name !== line.productVariant.product.name && (
                            <p className="text-sm text-muted-foreground mt-1">
                                {line.productVariant.name}
                            </p>
                        )}
                        <p className="text-sm text-muted-foreground mt-1">
                            {t('sku', {sku: line.productVariant.sku})}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2 sm:hidden">
                            <Price value={line.unitPriceWithTax} currencyCode={activeOrder.currencyCode}/> {t('each')}
                        </p>

                        <div className="flex items-center gap-3 mt-4">
                            <div className="flex items-center gap-1 border rounded-full bg-muted/50">
                                <form
                                    action={async () => {
                                        'use server';
                                        await adjustQuantity(line.id, Math.max(1, line.quantity - 1));
                                    }}
                                >
                                    <Button
                                        type="submit"
                                        variant="ghost"
                                        size="icon"
                                        className="h-9 w-9 rounded-full transition-all duration-200 hover:bg-background"
                                        disabled={line.quantity <= 1}
                                    >
                                        <Minus className="h-4 w-4"/>
                                    </Button>
                                </form>

                                <span className="w-10 text-center font-semibold tabular-nums transition-all duration-200">{line.quantity}</span>

                                <form
                                    action={async () => {
                                        'use server';
                                        await adjustQuantity(line.id, line.quantity + 1);
                                    }}
                                >
                                    <Button
                                        type="submit"
                                        variant="ghost"
                                        size="icon"
                                        className="h-9 w-9 rounded-full transition-all duration-200 hover:bg-background"
                                    >
                                        <Plus className="h-4 w-4"/>
                                    </Button>
                                </form>
                            </div>

                            <form
                                action={async () => {
                                    'use server';
                                    await removeFromCart(line.id);
                                }}
                            >
                                <Button
                                    type="submit"
                                    variant="ghost"
                                    size="icon"
                                    className="h-9 w-9 rounded-full text-destructive hover:text-destructive hover:bg-destructive/10 transition-colors duration-200"
                                >
                                    <X className="h-5 w-5"/>
                                </Button>
                            </form>

                            <div className="sm:hidden ml-auto">
                                <p className="font-semibold text-lg">
                                    <Price value={line.linePriceWithTax}
                                           currencyCode={activeOrder.currencyCode}/>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden sm:block text-right flex-shrink-0">
                        <p className="font-semibold text-lg">
                            <Price value={line.linePriceWithTax} currencyCode={activeOrder.currencyCode}/>
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                            <Price value={line.unitPriceWithTax} currencyCode={activeOrder.currencyCode}/> {t('each')}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
