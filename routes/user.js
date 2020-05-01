const express = require('express')
const router = express.Router();
const faker = require('faker')
const generateDetails = require('./helpers/getuser')

router.get('/', (req,res) =>
{   let format ={
    name:faker.image.image(),
    email: faker.internet.email(),
    address:faker.address.streetAddress(),
    bio: faker.lorem.sentence(),
 //   card: faker.helpers.createCard()
}
res.json(format)})

router.get('/:id', (req,res) =>
{
    af=[]
    generateDetails(af,req.params.id)
    res.json(af)
})

module.exports = router;