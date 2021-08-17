const app = require('express')();
const { graphqlHTTP } = require('express-graphql');

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}))
.use(cors());

app.listen(4000);

console.log('Running a GraphQL API server at http://localhost:4000/graphql');