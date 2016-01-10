const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull } = GraphQL.types;

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
