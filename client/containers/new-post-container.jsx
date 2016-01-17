NewPostContainer = GraphQL.bindData((props, onData) => {
  return AuthorSchema.watchQuery(NewPostContainer.query, onData)
})(NewPost);

NewPostContainer.query = `{
  authors {
    id,
    name
  }
}`;
