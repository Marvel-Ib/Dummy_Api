const faker = require('faker')

const generateuser = (arr,id) =>
{
    for(let i = 1; i<=id; i++)
    {
        let format ={
           firstname:faker.name.firstName(),
           lastname:faker.name.lastName(),
            email: faker.internet.email(),
            address:faker.address.streetAddress(),
            city:faker.address.city(),
            country:faker.address.country(),
            image:faker.image.avatar(),
            bio: faker.lorem.sentence(),
        }
        arr.push(format)
    }
}

module.exports = generateuser;