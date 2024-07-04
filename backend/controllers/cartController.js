const Cart = require('../models/cartModel');
const Recipe = require('../models/recipeModel');

const addToCart = async (req, res) => {
    const { recipeId, quantity } = req.body;

    try {
        const user_id = req.user._id
        // Find the recipe by its ID
        const recipe = await Recipe.findById(recipeId);
        if (!recipe) {
            throw new Error('Recipe not found');
        }

        // Call addToCart method on user.cart
        const cart = await Cart.addToCart(recipe.name, quantity, recipe.price,user_id);

        // Respond with updated user.cart
        res.status(200).json(cart);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
}

// Update the quantity of an item in the cart
const updateCartItem = async (req, res) => {
    const { name, quantity } = req.body;

    try {
        // Find the cart
        const cart = await Cart.findOne();

        if (!cart) {
            throw new Error('Cart not found');
        }

        // Call updateCartItem method on the cart
        await cart.updateCartItem(name, quantity);

        // Respond with updated cart
        res.status(200).json(cart);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
}

// Remove an item from the cart
const removeCartItem = async (req, res) => {
    const { name } = req.body;
    const user_id = req.user._id
    try {
        // Find the cart
        const cart = await Cart.removeCartItem(name,user_id);
        
        res.status(200).json(cart);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
}


// Get cart items
const getCartItems = async (req, res) => {
    try {
        const user_id = req.user._id
        const cart = await Cart.findOne({ user_id });
        if (!cart) {
            throw new Error('Cart not found');
        }
        res.status(200).json(cart);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
}

module.exports = { addToCart, updateCartItem, removeCartItem, getCartItems };


