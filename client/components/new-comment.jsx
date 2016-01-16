NewComment = React.createClass({
	handleSubmit(e) {
		e.preventDefault();
		e.stopPropagation();

		const id = Random.id();
		const text = ReactDOM.findDOMNode(this.refs.text).value;
		const author = ReactDOM.findDOMNode(this.refs.author).value;
		const postId = FlowRouter.getParam('postId');

		BlogSchema.cache.setItemPayload(
			BlogPostContainer.query,
			{postId: postId},
			{},
		);

		CommentSchema.mutate(`
			{
				post: addComment(
					id: "${id}",
					text: "${text}",
					author: "${author}",
					postId: "${postId}"
				) {
					id,
					text,
					author {
						id
					},
					postId
				}
			}
		`)
		.then((payload) => {
			// if success, update the cache with the modified document
			BlogSchema.cache.setItemPayload(
				BlogPostContainer.query,
				{postId},
				payload
			);
		}, (error) => {
			alert(error.message);
		})
		.then(() => {
			BlogSchema.refetchQuery(BlogPostContainer.query);
		});
	},
	render() {
		return <div>
			<h3>New comment:</h3>
			<form onSubmit={this.handleSubmit}>
				<label>Text</label>
				<textarea className="field col-12 block mb2" rows="5" ref="text" />
				<label>Author</label>
				<select className="field block col-12 mb2" ref="author">
					<option value="" disabled selected>Pick an author</option>
					{this.props.authors.map(author => {
						return <option value={author.id} key={author.id}>
							{author.name}
						</option>;
					})}
				</select>
				<button className="btn btn-primary" onClick={this.handleSubmit}>
					Post comment
				</button>
			</form>
		</div>;
	}
});
