const faker = require('faker')

const generateuser = (arr,id) =>
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

module.exports = generateuser;