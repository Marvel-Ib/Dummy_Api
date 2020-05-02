const express = require('express')
const router = express.Router();
const faker = require('faker')
const generateDetails = require('./helpers/getlorem')

router.get('/', (req,res) =>
{    let format ={
    word:faker.lorem.word(),
    paragraph:faker.lorem.paragraph(),
    lines:faker.lorem.lines(),
    sentence:faker.lorem.sentence(),
    text:faker.lorem.text(),
     }
res.json(format)})

router.get('/:id', (req,res) =>
{
    af=[]
    generateDetails(af,req.params.id)
    res.json(af)
})

module.exports = router;