Package.describe({
  name: 'rethinkdb',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  rethinkdbdash: "2.2.15",
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles('rethinkdb.js', 'server');
  api.export('r', 'server')
});
