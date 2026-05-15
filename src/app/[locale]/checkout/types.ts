// In your gql.tada setup
const graphql = initGraphQLTada<{
  scalars: {
    Money: number;
    // add other Vendure scalars if needed
  };
}>();
