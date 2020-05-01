const express = require('express')
const app = express();
const cors = require('cors');

const userRoutes = require('./routes/user')

const port = process.env.PORT || 4500;
//allow api to work on frontend
app.use(cors())
app.use('/user', userRoutes)


app.listen(port)



