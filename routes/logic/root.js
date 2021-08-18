const stocks = require('../../stocksData/stocks')

const VALUE = Math.random(1000)

const addStock = (input) => {
    const id = VALUE
    return {
        id,
        ...input
    }
}

const root = {
    getAllStocks: () => {
        return stocks
    },
    getStock: ({ id }) => {
        return stocks.find(user => user.id == id)
    },
    addStock: ({ input }) => {
        const stock = addStock(input)
        stocks.push(stock)
        return stocks
    }
}

module.exports = root;