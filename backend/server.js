require('dotenv').config()
const express = require('express')
const recipesRoutes = require('./routes/recipes')
const mongoose = require('mongoose')
mongoose.set('strictQuery',true)


const app = express()

app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use('/api/recipes',recipesRoutes)

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

