const express = require('express')
const router = express.Router();
const faker = require('faker')
const generateDetails = require('./helpers/getuser')

router.get('/', (req,res) =>
{         let format ={
    firstname:faker.name.firstName(),
    lastname:faker.name.lastName(),
     email: faker.internet.email(),
     address:faker.address.streetAddress(),
     city:faker.address.city(),
     country:faker.address.country(),
     image:faker.image.avatar(),
     bio: faker.lorem.sentence(),
 }
res.json(format)})

router.get('/:id', (req,res) =>
{
    af=[]
    generateDetails(af,req.params.id)
    res.json(af)
})

module.exports = router;