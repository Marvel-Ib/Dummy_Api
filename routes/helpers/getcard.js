const faker = require('faker')

const generatecard = (arr,id) =>
{
    for(let i = 1; i<=id; i++)
    {
        let format ={
           card:faker.helpers.createCard()
        }
        arr.push(format)
    }
}

module.exports = generatecard;