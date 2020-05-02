const express = require('express')
const router = express.Router();
const faker = require('faker')
const generateDetails = require('./helpers/getcard')

router.get('/', (req,res) =>
{       let format ={
    card:faker.helpers.createCard()
 }
res.json(format)})

router.get('/:id', (req,res) =>
{
    af=[]
    generateDetails(af,req.params.id)
    res.json(af)
})

module.exports = router;