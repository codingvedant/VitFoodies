const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
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
    },
    user_id: {
        type: String,
        required: true
    }
});

// Define static methods
cartSchema.statics.addToCart = async function(name, quantity, price, user_id) {
    let cart = await this.findOne({ user_id });

    if (!cart) {
        cart = new this({ user_id });
    }

    const existingItem = cart.items.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.items.push({ name, quantity, price });
    }

    cart.totalAmount += quantity * price;

    await cart.save();
    return cart;
};

cartSchema.statics.updateCartItem = async function(name, quantity, user_id) {
    let cart = await this.findOne({ user_id });
    if (!cart) {
        throw new Error('Cart not found');
    }

    const item = cart.items.find(item => item.name === name);
    if (item) {
        cart.totalAmount -= item.quantity * item.price;
        item.quantity = quantity;
        cart.totalAmount += quantity * item.price;
        await cart.save();
    }
    return cart;
};

cartSchema.statics.removeCartItem = async function(name, user_id) {
    let cart = await this.findOne({ user_id });
    if (!cart) {
        throw new Error('Cart not found');
    }

    const itemIndex = cart.items.findIndex(item => item.name === name);
    if (itemIndex >= 0) {
        const item = cart.items[itemIndex];
        cart.totalAmount -= item.quantity * item.price;
        cart.items.splice(itemIndex, 1);
        await cart.save();
    }
    return cart;
};

// Add this to the cartSchema.statics
cartSchema.statics.clearCart = async function(user_id) {
    let cart = await this.findOne({ user_id });
    if (!cart) {
        throw new Error('Cart not found');
    }

    cart.items = [];
    cart.totalAmount = 0;

    await cart.save();
    return cart;
};

// Create and export the model
const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;



