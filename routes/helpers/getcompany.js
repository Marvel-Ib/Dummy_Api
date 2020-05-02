const faker = require('faker')

const generatecard = (arr,id) =>
{
    for(let i = 1; i<=id; i++)
    {
        let format ={
           companyName: faker.company.companyName(),
           companySuffix:faker.company.companySuffix(),
           catchPhrase:faker.company.catchPhrase(),
           companyGoals:faker.company.bs(),
           companyCity:faker.address.city(),
           companyCountry:faker.address.country(),
        }
        arr.push(format)
    }
}

module.exports = generatecard;