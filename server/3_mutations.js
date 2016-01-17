const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = GraphQL.types;

AuthorMutations = new GraphQLObjectType({
  name: 'AuthorMutations',
  fields: () => ({
    addAuthor: {
      type: Author,
      args: {
        id: {type: new GraphQLNonNull(GraphQLString)},
        name: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve(root, args) {
        return r.table('authors').insert(args, {returnChanges: true})
        .then((info) => {
          if (info.first_error) throw new Error(info.first_error)
          return info.changes[0].new_val;
        })
      }
    }
  })
});

BlogMutations = new GraphQLObjectType({
  name: 'BlogMutations',
  fields: () => ({
    addPost: {
      type: BlogPost,
      args: {
        id: {type: new GraphQLNonNull(GraphQLString)},
        title: {type: new GraphQLNonNull(GraphQLString)},
        content: {type: new GraphQLNonNull(GraphQLString)},
        author: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve(root, args) {
        return r.table('posts').insert(args, {returnChanges: true})
        .then((info) => {
          if (info.first_error) throw new Error(info.first_error)
          return info.changes[0].new_val;
        })
      }
    },

    reset: {
      type: GraphQLString,
      resolve(root, args, {rootValue}) {
        console.log(rootValue)
        //if (!rootValue.userId) { // if this is not a loggedIn user
        //throw new Error("Unauthorized");
        //}
        return r.table('posts').delete({}).run()
        .then(() => r.table('comments').delete({}).run())
        .then(() => r.table('authors').delete({}).run())
        .then(resetBlog)
      }
    }
  })
});

CommentMutations = new GraphQLObjectType({
  name: 'CommentsMutations',
  fields: () => ({
    addComment: {
      type: Comment,
      args: {
        id: {type: new GraphQLNonNull(GraphQLString)},
        postId: {type: new GraphQLNonNull(GraphQLString)},
        text: {type: new GraphQLNonNull(GraphQLString)},
        author: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve(root, args) {
        return r.table('comments').insert(args, {returnChanges: true})
        .then((info) => {
          if (info.first_error) throw new Error(info.first_error)
          return info.changes[0].new_val;
        })
      }
    }
  })
});
