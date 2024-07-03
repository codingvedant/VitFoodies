const express = require('express');
const { createRecipe, getRecipe, getRecipes, deleteRecipe, updateRecipe } = require('../controllers/recipeController');
const cors = require('cors');

const router = express.Router();

router.use(cors());

// Get all recipes
router.get('/', getRecipes);

// Get a single recipe
router.get('/:id', getRecipe);

// Create a new recipe
router.post('/', createRecipe);

// Delete a recipe
router.delete('/:id', deleteRecipe);

// Update a recipe
router.patch('/:id', updateRecipe);

module.exports = router;
