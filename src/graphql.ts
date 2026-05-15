import { initGraphQLTada } from 'gql.tada';
import type { introspection } from './graphql-env';

export const graphql = initGraphQLTada<{
  introspection: introspection;
  scalars: {
    Money: number;
    DateTime: string;
  };
}>();

export { readFragment } from 'gql.tada';
export type { ResultOf, VariablesOf } from 'gql.tada';
