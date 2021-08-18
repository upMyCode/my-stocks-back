const app = require('express')();
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const root = require('./routes/logic/root')
const schema = require('./schemas/schema');

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  rootValue: root
}));

app.listen(4000);

console.log('Running a GraphQL API server at http://localhost:4000/graphql');