const { buildSchema } = require('graphql');

export const Stock = buildSchema(`
  type Query {
    id: ID,
    companyTitle: String,
    ticker: String,
    cost: Float,
    extra: {
      peRatio: Intager,
      betta: Float,
    }
  }
`);