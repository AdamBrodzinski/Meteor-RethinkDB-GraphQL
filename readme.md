# Meteor RethinkDB

Currently Meteor doesn't support RethinkDB. However, GraphQL does and we can use any promise based database with the Promise polyfill. GraphQL doesn't support realtime (yet) so this example will not update like Meteor publications will.

Note, no UI is shown here but you can look at https://github.com/kadira-samples/meteor-graphql-demo for the same blog with UI

## Usage

- `rethinkdb` *(run in another terminal)*
- Add the following tables to `test` db: `posts comments authors`
- `meteor run` *(fixtures will create fake data)*
- visit [localhost:3000/graphql](http://localhost:3000/graphql)

### To start your own project just add these packages:

```text
meteor add kadira:graphql
meteor add promise
meteor create --package rethinkdb
# manually add from Npm like example
meteor add rethinkdb
```