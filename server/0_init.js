// Bootstrap with some dummy data, it will complain in the console
// about not returning the promise but we don't care for this fake data

r.table('authors').run().then(function(authors) {
  if(authors.length) return;
  resetBlog();
});

// we'll use this in the reset mutation in schema
resetBlog = function () {
  console.log("Resetting Data")
  r.table('authors').insert({id: 'arunoda', name: 'Arunoda Susiripala'}).run()
  r.table('authors').insert({id: 'tom', name: 'Tom Moodi'}).run()

  _.range(5).forEach(i => {
    const postId = Random.id();

    r.table('posts').insert({
      id: postId,
      title: `Post Title: ${i}`,
      content: `Post content: ${i}`,
      author: 'arunoda'
    }).run()

    const commentId = Random.id();
    r.table('comments').insert({
      id: commentId,
      text: `Post ${i} is awesome`,
      postId,
      author: 'tom'
    }).run()
  })
}
