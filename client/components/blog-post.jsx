BlogPost = ({post}) => <article>
	<header className="white bg-blue px3 py3">
		<h1 className="m0">{post.title}</h1>
		<Author author={post.author} color="white" />
	</header>
	<div className="py3" dangerouslySetInnerHTML={{__html: marked(post.content)}} />
	<section className="mt4">
		<h2>Comments:</h2>
		<ul className="list-reset mb4">
			{(() => {
				if (post.comments.length === 0) {
					return <li className="mb2">There are no comments yet.</li>;
				}
				return post.comments.map(comment => {
					return <li className="mb2" key={comment.id}>
						<Comment key={comment.id} comment={comment} />
					</li>;
				})
			})()}
		</ul>
		<NewCommentContainer />
	</section>
</article>;

BlogPost.displayName = 'BlogPost';
BlogPost.fragment = BlogSchema.createFragment(`
	fragment on BlogPost {
		id,
		title,
		content,
		author {
			...${Author.fragment}
		},
		comments {
			...${Comment.fragment}
		},
	}
`);
