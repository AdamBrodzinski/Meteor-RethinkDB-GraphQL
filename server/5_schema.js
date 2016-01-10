const { GraphQLSchema } = GraphQL.types;

const schema = new GraphQLSchema({
  query: BlogQuery,
  mutation: Mutations
});

GraphQL.registerSchema('Blog', schema);
