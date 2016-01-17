AuthorsOverviewContainer = GraphQL.bindData((props, onData) => {
  return AuthorSchema.watchQuery(AuthorsOverviewContainer.query, onData)
})(AuthorsOverview);

AuthorsOverviewContainer.query = `{
  authors {
    ...${AuthorsOverview.fragment}
  }
}`;
