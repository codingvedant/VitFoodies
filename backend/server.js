require('dotenv').config()
const express = require('express')
const recipesRoutes = require('./routes/recipes')
const userRoutes = require('./routes/user')
const mongoose = require('mongoose')
mongoose.set('strictQuery',true)
const cors = require('cors');

const app = express()

app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use('/api/recipes',recipesRoutes)
app.use('/api/user',userRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,() =>{
            console.log('Connected to DB and listening to port',process.env.PORT)
        })
    })
    .catch((error)=>
    {
        console.log(error)
    })

