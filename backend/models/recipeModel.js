const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    chef:{
        type:String,
        required:true
    },
    time:{
        type:Number,
        required:true
    },
    img:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('Recipe',recipeSchema)