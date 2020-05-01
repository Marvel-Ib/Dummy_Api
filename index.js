const express = require('express')
const app = express();
const faker = require('faker')
const cors = require('cors')

const port = process.env.PORT || 4500;
//allow api to work on frontend
app.use(cors())


app.get('/', (req,res) =>
{
    let format ={
        name:faker.image.image(),
        email: faker.internet.email(),
        address:faker.address.streetAddress(),
        bio: faker.lorem.sentence(),
     //   card: faker.helpers.createCard()
    }
    res.json(format)
})
app.get('/:id', (req,res) =>
{
    af=[]
    generateDetails(af,req.params.id)
    res.json(af)
})

app.listen(port)




const generateDetails = (arr,id) =>
{
    for(let i = 1; i<=id; i++)
    {
        let format ={
            name:faker.name.findName(),
            email: faker.internet.email(),
            address:faker.address.streetAddress(),
            bio: faker.lorem.sentence(),
         //   card: faker.helpers.createCard()
        }
        arr.push(format)
    }
}