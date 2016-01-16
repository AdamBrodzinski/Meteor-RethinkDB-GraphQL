BlogOverview = ({posts}) => <div>
	<h1>Blog Posts</h1>
	<ul className="list-reset m0">
		{posts.map(post => {
			return <li className="border-top py2" key={post.id}>
				<h2 className="m0">
					<a href={`/post/${post.id}`}>{post.title}</a>
				</h2>
			</li>;
		})}
	</ul>
</div>;

BlogOverview.displayName = 'BlogTitles';
BlogOverview.fragment = BlogSchema.createFragment(`
	fragment on BlogPost {
		id,
		title,
		content,
		author {
			...${Author.fragment}
		}
	}
`);
