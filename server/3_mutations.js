const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = GraphQL.types;

// this allows us to make mutations like Meteor's RPC calls
 Mutations = new GraphQLObjectType({
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
