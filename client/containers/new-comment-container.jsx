NewCommentContainer = GraphQL.bindData((props, onData) => {
	return AuthorSchema.watchQuery(NewCommentContainer.query, onData)
})(NewComment);

NewCommentContainer.query = `{
	authors {
		id,
		name
	}
}`;
