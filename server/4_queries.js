const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull } = GraphQL.types;

AuthorQuery = new GraphQLObjectType({
	name: 'AuthorQueries',
	fields: () => ({
		author: {
			type: Author,
			args: {
				id: {type: new GraphQLNonNull(GraphQLString)}
			},
			resolve(root, args) {
				return r.table('authors').get(args.id);
			}
		},
		authors: {
			type: new GraphQLList(Author),
			resolve: () => r.table('authors').run()
		}
	})
});

BlogQuery = new GraphQLObjectType({
	name: 'BlogQueries',
	fields: () => ({
		posts: {
			type: new GraphQLList(BlogPost),
			resolve: () => r.table('posts').run()
		},

		recentPost: {
			type: BlogPost,
			resolve() {
				return r.table('posts').limit(1)
				.then(docs => docs[0])
			}
		},

		post: {
			type: BlogPost,
			// limit how we can query a post, otherwise we need to use an index
			args: {
				id: {type: new GraphQLNonNull(GraphQLString)}
			},
			resolve(root, args) {
				return r.table('posts').get(args.id);
			}
		}
	})
});

CommentQuery = new GraphQLObjectType({
	name: 'CommentQueries',
	fields: () => ({
		comments: {
			type: new GraphQLList(Author),
			resolve: () => r.table('comments').run()
		}
	})
});
