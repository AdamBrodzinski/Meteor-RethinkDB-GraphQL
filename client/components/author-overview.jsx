AuthorOverview = ({author}) => <div>
  <header className="white bg-blue mb3 px3 py3">
    <h1 className="m0">{author.name}</h1>
  </header>
  <section className="mb3">
    <h2 className="border-bottom py1">Posts</h2>
    <ul className="list-reset m0">
      {author.posts.map(post => {
        return <li className="py1" key={post.id}>
          <p className="h3 m0">
            <a href={`/post/${post.id}`}>{post.title}</a>
          </p>
        </li>
      })}
    </ul>
  </section>
  <section>
    <h2 className="border-bottom py1">Comments</h2>
    <ul className="list-reset m0">
      {author.comments.map(comment => {
        console.log(comment);
        return <li className="py1" key={comment.id}>
          <p className="h3 m0">
            <a href={`/post/${comment.post.id}`}>
              "{comment.text}"
            </a>
          </p>
        </li>
      })}
    </ul>
  </section>
</div>;

AuthorOverview.displayName = 'AuthorsOverview';
AuthorOverview.fragment = AuthorSchema.createFragment(`
fragment on Author {
  id,
  name,
  posts {
    id,
    title,
    content
  },
  comments {
    id,
    text,
    post {
      id
    }
  }
}`);
