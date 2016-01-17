AuthorPageContainer = GraphQL.bindData((props, onData) => {
  const vars = {id: props.id};
  return AuthorSchema.watchQuery(AuthorPageContainer.query, vars, onData)
})(AuthorOverview);

AuthorPageContainer.query = `
query _($id: String!) {
  author(id: $id) {
    ...${AuthorOverview.fragment}
  }
}`;
