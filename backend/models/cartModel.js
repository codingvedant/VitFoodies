const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
    recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    price: {
        type: Number,
        required: true
    }
});

const cartSchema = new Schema({
    items: [cartItemSchema],
    totalAmount: {
        type: Number,
        required: true,
        default: 0
    }
});

cartSchema.methods.addToCart = async function(recipeId, name ,quantity, price) {
    const existingItemIndex = this.items.findIndex(item => item.recipe.toString() === recipeId.toString());
    if (existingItemIndex >= 0) {
        this.items[existingItemIndex].quantity += quantity;
    } else {
        this.items.push({ recipe: recipeId,name, quantity, price });
    }
    this.totalAmount += quantity * price;
    await this.save();
};

cartSchema.methods.updateCartItem = async function(recipeId, quantity) {
    const item = this.items.find(item => item.recipe.toString() === recipeId.toString());
    if (item) {
        this.totalAmount -= item.quantity * item.price;
        item.quantity = quantity;
        this.totalAmount += quantity * item.price;
        await this.save();
    }
};

cartSchema.methods.removeCartItem = async function(recipeId) {
    const itemIndex = this.items.findIndex(item => item.recipe.toString() === recipeId.toString());
    if (itemIndex >= 0) {
        const item = this.items[itemIndex];
        this.totalAmount -= item.quantity * item.price;
        this.items.splice(itemIndex, 1);
        await this.save();
    }
};

module.exports = mongoose.model('Cart', cartSchema);