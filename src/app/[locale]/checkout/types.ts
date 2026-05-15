import { ResultOf } from '@/graphql';
import { GetActiveOrderForCheckoutQuery } from '@/lib/vendure/queries';

type BaseOrder = NonNullable<ResultOf<typeof GetActiveOrderForCheckoutQuery>['activeOrder']>;

type ShippingLineWithPrice = BaseOrder['shippingLines'][number] & {
  priceWithTax: number;
};

export type CheckoutOrder = Omit<BaseOrder, 'shippingLines'> & {
  shippingLines: Array<ShippingLineWithPrice>;
};

export type OrderLine = CheckoutOrder['lines'][number];
export type ShippingAddress = CheckoutOrder['shippingAddress'];
export type BillingAddress = CheckoutOrder['billingAddress'];
