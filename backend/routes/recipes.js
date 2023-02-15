const express = require('express')
const { createRecipe,getRecipe,getRecipes,deleteRecipe,updateRecipe } = require('../controllers/recipeController')
const cors = require('cors')
const app = express()

const router = express.Router()
router.use(cors());
router.get('/',getRecipes)

router.get('/:id',getRecipe)

router.post('/',createRecipe)

router.delete('/:id',deleteRecipe)

router.patch('/:id',updateRecipe)

module.exports=router