const  { buildSchema } = require('graphql')

const schema = buildSchema(`
  type Stock {
    id: ID
    companyTitle: String
    ticker: String
    cost: Float
    extra: [Extra]
  }

  type Extra {
    peRatio: Int
    betta: Float
  }

  input StocksInput {
    id: ID
    companyTitle: String
    ticker: String!
    cost: Float!
    extra: [ExtraInput]
  }

  input ExtraInput {
    peRatio: Int
    betta: Float
  }

  type Query {
    getAllStocks: [Stock]
    getStock(id: ID): Stock
  }

  type Mutation {
    addStock(input: StocksInput): Stock
  }

`)

module.exports = schema