const { GraphQLObjectType, GraphQLString, GraphQLList } = GraphQL.types;

Author = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
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
        console.log('post', post)
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
        return r.table('comments').get(comment.author).run();
      }
    },
    postId: {type: GraphQLString}
  })
})
