import { initGraphQLTada } from 'gql.tada';
import type { introspection } from './graphql-env.d.ts';

export const graphql = initGraphQLTada<{
  introspection: introspection;
  scalars: {
    Money: number;
    DateTime: string;
  };
}>();

export { readFragment } from 'gql.tada';
export type { ResultOf, VariablesOf } from 'gql.tada';
import { ResultOf } from '@/graphql';
import { GetActiveOrderForCheckoutQuery } from '@/lib/vendure/queries';

export type CheckoutOrder = NonNullable<ResultOf<typeof GetActiveOrderForCheckoutQuery>['activeOrder']>;
export type OrderLine = CheckoutOrder['lines'][number];
export type ShippingAddress = CheckoutOrder['shippingAddress'];
export type BillingAddress = CheckoutOrder['billingAddress'];
