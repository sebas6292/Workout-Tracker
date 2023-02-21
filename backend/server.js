
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

// express app 
const app = express()

// middleware 
app.use(express.json()) 
// any request that comes to the server will looks for some body/data and if it does then it will parse into the req, res handler   


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes - allows us to grab all of the request and response on the workout and user routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

mongoose.set('strictQuery', false);
// connect to db 
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests 
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB & Listening on Port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

// middleware 
// Any code that executes on the server or sending a response such as req or res
// the key word [next] will allow you to execute the next requests or response

