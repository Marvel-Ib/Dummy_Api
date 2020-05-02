const faker = require('faker')

const generatecard = (arr,id) =>
{
    for(let i = 1; i<=id; i++)
    {
        let format ={
           accountNum: faker.finance.account(),
           accountName: faker.finance.accountName(),
           amount:faker.finance.amount(),
           currencySymbol:faker.finance.currencySymbol(),
           transactionType: faker.finance.transactionType(),
           bitcoinAddress:faker.finance.bitcoinAddress()
        }
        arr.push(format)
    }
}

module.exports = generatecard;