const { GraphQLSchema } = GraphQL.types;

GraphQL.registerSchema('Author', new GraphQLSchema({
  query: AuthorQuery,
  mutation: AuthorMutations
}));

GraphQL.registerSchema('Blog', new GraphQLSchema({
  query: BlogQuery,
  mutation: BlogMutations
}));

GraphQL.registerSchema('Comment', new GraphQLSchema({
  query: CommentQuery,
  mutation: CommentMutations
}));
