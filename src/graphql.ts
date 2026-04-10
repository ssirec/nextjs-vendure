import { graphql, readFragment } from "gql.tada";
import type { ResultOf, VariablesOf } from "gql.tada";

// Only export what actually exists in gql.tada
export { graphql, readFragment };
export type { ResultOf, VariablesOf };
