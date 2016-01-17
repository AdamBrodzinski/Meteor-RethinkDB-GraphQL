AuthorsOverview = ({authors}) => <div>
  <h1>Authors</h1>
  <ul className="list-reset m0">
    {authors.map(author => {
      return <li className="border-top py2" key={author.id}>
        <Author author={author} />
      </li>;
    })}
  </ul>
</div>;

AuthorsOverview.displayName = 'AuthorsOverview';
AuthorsOverview.fragment = AuthorSchema.createFragment(`
fragment on Author {
  id,
  name
}`);
