const User = require('../models/userModel');
const Cart = require('../models/cartModel');
const Recipe = require('../models/recipeModel');

// Add a recipe to the user's cart
const addToCart = async (req, res) => {
    const { userId, recipeId, quantity } = req.body;

    try {
        // Find the user and populate the 'cart' field
        const user = await User.findById(userId).populate('cart');
        if (!user) {
            throw new Error('User not found');
        }
        
        // Find the recipe by its ID
        const recipe = await Recipe.findById(recipeId);
        if (!recipe) {
            throw new Error('Recipe not found');
        }

        // Ensure user.cart is initialized and has addToCart method
        if (!user.cart) {
            user.cart = new Cart(); // Assuming Cart is imported and available
        }

        // Call addToCart method on user.cart
        await user.cart.addToCart(recipe._id, quantity, recipe.price);

        // Save the user with updated cart
        await user.save();

        // Respond with updated user.cart
        res.status(200).json(user.cart);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
}

// Update the quantity of a recipe in the user's cart
const updateCartItem = async (req, res) => {
    const { userId, recipeId, quantity } = req.body;

    try {
        // Find the user and populate the 'cart' field
        const user = await User.findById(userId).populate('cart');
        if (!user) {
            throw new Error('User not found');
        }

        // Ensure user.cart is initialized and has updateCartItem method
        if (!user.cart) {
            user.cart = new Cart(); // Assuming Cart is imported and available
        }

        // Call updateCartItem method on user.cart
        await user.cart.updateCartItem(recipeId, quantity);

        // Save the user with updated cart
        await user.save();

        // Respond with updated user.cart
        res.status(200).json(user.cart);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
}


// Remove a recipe from the user's cart
const removeCartItem = async (req, res) => {
    const { userId, recipeId } = req.body;

    try {
        // Find the user and populate the 'cart' field
        const user = await User.findById(userId).populate('cart');
        if (!user) {
            throw new Error('User not found');
        }

        // Ensure user.cart is initialized and has removeCartItem method
        if (!user.cart) {
            user.cart = new Cart(); // Assuming Cart is imported and available
        }

        // Call removeCartItem method on user.cart
        await user.cart.removeCartItem(recipeId);

        // Save the user with updated cart
        await user.save();

        // Respond with updated user.cart
        res.status(200).json(user.cart);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
}

module.exports = { addToCart, updateCartItem, removeCartItem };
