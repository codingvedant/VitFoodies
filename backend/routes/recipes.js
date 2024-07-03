const express = require('express');
const { createRecipe, getRecipe, getRecipes, deleteRecipe, updateRecipe } = require('../controllers/recipeController');
const cors = require('cors');
//const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(cors());
// router.use(requireAuth); // Uncomment this if you want to secure the routes

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
