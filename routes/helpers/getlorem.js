const faker = require('faker')

const generatecard = (arr,id) =>
{
    for(let i = 1; i<=id; i++)
    {
        let format ={
           word:faker.lorem.word(),
           paragraph:faker.lorem.paragraph(),
           lines:faker.lorem.lines(),
           sentence:faker.lorem.sentence(),
           text:faker.lorem.text(),
            }
        arr.push(format)
    }
}

module.exports = generatecard;