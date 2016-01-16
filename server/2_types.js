const { GraphQLObjectType, GraphQLString, GraphQLList } = GraphQL.types;

Author = new GraphQLObjectType({
	name: 'Author',
	fields: () => ({
		id: {type: GraphQLString},
		name: {type: GraphQLString},
		posts: {
			type: new GraphQLList(BlogPost),
			resolve(author) {
				return r.table('posts').filter({author: author.id}).run();
			}
		},
		comments: {
			type: new GraphQLList(Comment),
			resolve(author) {
				return r.table('comments').filter({author: author.id}).run();
			}
		}
	})
});


BlogPost = new GraphQLObjectType({
	name: 'BlogPost',
	fields: () => ({
		id: {type: GraphQLString},
		title: {type: GraphQLString},
		content: {type: GraphQLString},
		author: {
			type: Author,
			resolve(post) {
				return r.table('authors').get(post.author);
			}
		},
		comments: {
			type: new GraphQLList(Comment),
			resolve(post) {
				return r.table('comments').filter({postId: post.id }).run();
			}
		}
	})
});

Comment = new GraphQLObjectType({
	name: 'Comment',
	fields: () => ({
		id: {type: GraphQLString},
		text: {type: GraphQLString},
		author: {
			type: Author,
			resolve(comment) {
				return r.table('authors').get(comment.author).run();
			}
		},
		postId: {type: GraphQLString},
		post: {
			type: BlogPost,
			resolve(comment) {
				return r.table('posts').get(comment.postId).run();
			}
		}
	})
});
