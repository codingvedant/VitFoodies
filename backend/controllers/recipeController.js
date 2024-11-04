const Recipe = require('../models/recipeModel');
const mongoose = require('mongoose');

const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find({}).sort({ createdAt: -1 });
        res.status(200).json(recipes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getRecipe = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No such recipe found' });
        }

        const recipe = await Recipe.findById(id);

        if (!recipe) {
            return res.status(404).json({ error: 'No such recipe found' });
        }

        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createRecipe = async (req, res) => {
    const { name, chef, time, img, price, about, cuisine, servings, course } = req.body;

    try {
        const recipe = await Recipe.create({ name, chef, time, img, price, about, cuisine, servings, course });
        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const deleteRecipe = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No such recipe found' });
        }

        const recipe = await Recipe.findOneAndDelete({ _id: id });

        if (!recipe) {
            return res.status(400).json({ error: 'No such recipe found' });
        }

        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateRecipe = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No such recipe found' });
        }

        const recipe = await Recipe.findOneAndUpdate({ _id: id }, {
            ...req.body
        });

        if (!recipe) {
            return res.status(400).json({ error: 'No such recipe found' });
        }

        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createRecipe,
    getRecipes,
    getRecipe,
    deleteRecipe,
    updateRecipe
};
