BlogOverviewContainer = GraphQL.bindData((props, onData) => {
  return BlogSchema.watchQuery(BlogOverviewContainer.query, onData)
})(BlogOverview);

BlogOverviewContainer.query = `{
  posts {
    ...${BlogOverview.fragment}
  }
}`;
