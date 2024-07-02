const express = require('express')
const { createRecipe,getRecipe,getRecipes,deleteRecipe,updateRecipe } = require('../controllers/recipeController')
const cors = require('cors')
const app = express()
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//router.use(requireAuth)
router.use(cors());
router.get('/',getRecipes)

router.get('/:id',getRecipe)

router.post('/',createRecipe)

router.delete('/:id',deleteRecipe)

router.patch('/:id',updateRecipe)

module.exports=router