const express = require('express')
const router = express.Router();
const faker = require('faker')
const generateDetails = require('./helpers/getfinance')

router.get('/', (req,res) =>
{     let format ={
    accountNum: faker.finance.account(),
    accountName: faker.finance.accountName(),
    amount:faker.finance.amount(),
    currencySymbol:faker.finance.currencySymbol(),
    transactionType: faker.finance.transactionType(),
    bitcoinAddress:faker.finance.bitcoinAddress()
 }
res.json(format)})

router.get('/:id', (req,res) =>
{
    af=[]
    generateDetails(af,req.params.id)
    res.json(af)
})

module.exports = router;