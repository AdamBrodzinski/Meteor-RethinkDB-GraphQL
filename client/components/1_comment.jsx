Comment = ({comment}) => <div className="border-bottom py1">
	<div className="mb1">
		<Author author={comment.author}/>
	</div>
	<p>{comment.text}</p>
</div>;

Comment.displayName = 'Comment';
Comment.fragment = BlogSchema.createFragment(`
	fragment on Comment {
		id,
		text,
		author {
			...${Author.fragment}
		}
	}
`);
