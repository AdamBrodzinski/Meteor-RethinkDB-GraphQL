NewPost = React.createClass({
	handleSubmit(e) {
		e.preventDefault();
		e.stopPropagation();

		const post = {
			id: Random.id(),
			title: ReactDOM.findDOMNode(this.refs.title).value,
			content: ReactDOM.findDOMNode(this.refs.content).value,
			author: {
				id: ReactDOM.findDOMNode(this.refs.author).value,
				name: "Arunoda Susiripala"
			},
			comments: [],
			saving: true
		};


		BlogSchema.cache.setItemPayload(
			BlogPostContainer.query,
			{postId: post.id},
			{post},
		);

		BlogSchema.mutate(`
			{
				post: addPost(
					id: "${post.id}",
					title: "${post.title}",
					content: "${post.content}",
					author: "${post.author.id}"
				) {
					...${BlogPost.fragment}
				}
			}
		`)
		.then((payload) => {
			// if success, update the cache with the modified document
			BlogSchema.cache.setItemPayload(
				BlogPostContainer.query,
				{postId: post.id},
				payload
			);
		}, (error) => {
			// if there is an error, alert it
			alert(error.message);
		})
		.then(() => {
			// refetch the query for the home page titles
			BlogSchema.refetchQuery(BlogOverviewContainer.query);
		});


		FlowRouter.go(`/post/${post.id}`);
	},
	render() {
		return <div>
			<h1>New Blog Post</h1>
			<form onSubmit={this.handleSubmit}>
				<label>Title</label>
				<input className="field block col-12 mb2" type="text" ref="title" />
				<label>Content</label>
				<textarea className="field block col-12 mb2" rows="5" ref="content" />
				<label>Author</label>
				<select className="field block col-12 mb2" ref="author">
					<option value="" disabled selected>Pick an author</option>
					{this.props.authors.map(author => {
						return <option value={author.id} key={author.id}>
							{author.name}
						</option>;
					})}
				</select>
				<button className="btn btn-primary" onClick={this.handleSubmit}>Create Post</button>
			</form>
		</div>
	}
});
