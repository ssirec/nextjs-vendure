import { graphql } from './path-to-your-graphql-client'; // import z miejsca, gdzie inicjalizujesz graphql (plik z initGraphQLTada)
import type { ResultOf, VariablesOf } from 'gql.tada';

// opcjonalnie: wklej query jako string (jeśli używasz runtime string queries)
export const ProductQuery = `query Product($slug: String!) {
  product(slug: $slug) {
    id
    name
    slug
    description
  }
}`;

export type ProductVariables = VariablesOf<typeof ProductQuery>; // { slug: string }
export type ProductResult = ResultOf<typeof ProductQuery>;

export async function fetchProduct(slug: string): Promise<ProductResult> {
  return await graphql.request(ProductQuery, { slug });
}
