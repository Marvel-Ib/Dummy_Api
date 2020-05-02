const express = require('express')
const app = express();
const cors = require('cors');

const userRoutes = require('./routes/user')
const cardRoutes = require('./routes/card')
const financeRoutes = require('./routes/finance')
const companyRoutes = require('./routes/company')
const loremRoutes=require('./routes/lorem')

const port = process.env.PORT || 4500;
//allow api to work on frontend
app.use(cors())
app.use('/user', userRoutes)
app.use('/card',cardRoutes)
app.use('/finance', financeRoutes)
app.use('/company',companyRoutes)
app.use('/lorem', loremRoutes)


app.get('/', (req,res) =>
{
    res.send(`<div> 
    <p>get random user details:  /user  or  /user/:id </p>
    <p>get random card details:  /card or  /card/:id </p>
    <p>get random finance details:  /finance or  /finance/:id </p>
    <p>get random company details:  /company or  /company/:id </p>
    <p>get random lorem details:  /lorem or  /lorem/:id </p>
    
    </div>`)    
})

app.listen(port)



