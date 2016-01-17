Author = ({author, color}) => <a className={`h3 ${color}`} href={`/authors/${author.id}`}>
  {author.name}
</a>;

Author.displayName = 'Author';
Author.fragment = BlogSchema.createFragment(`
fragment on Author {
  id,
  name
}`);
