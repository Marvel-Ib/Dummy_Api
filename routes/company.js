const express = require('express')
const router = express.Router();
const faker = require('faker')
const generateDetails = require('./helpers/getcompany')

router.get('/', (req,res) =>
{     let format ={
    companyName: faker.company.companyName(),
    companySuffix:faker.company.companySuffix(),
    catchPhrase:faker.company.catchPhrase(),
    companyGoals:faker.company.bs(),
    companyCity:faker.address.city(),
    companyCountry:faker.address.country(),
 }
res.json(format)})

router.get('/:id', (req,res) =>
{
    af=[]
    generateDetails(af,req.params.id)
    res.json(af)
})

module.exports = router;