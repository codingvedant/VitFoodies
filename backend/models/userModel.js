const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const validator = require('validator');
const Cart = require('./cartModel');  // Import Cart model

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    cart: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Cart' 
    }  // Add reference to cart
});

userSchema.statics.signup = async function(email,password){

    if(!email || !password) throw Error('All fields must be filled');
    if(!validator.isEmail(email)) throw Error('Email is not valid');
    if(!validator.isStrongPassword(password)) throw Error('Password is not strong enough');
    const exists = await this.findOne({email});
    if(exists){
        throw Error('Email already in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const cart = await Cart.create({ items: [], totalAmount: 0 });  // Create a new cart for the user
    const user = await this.create({ email, password: hash, cart: cart._id });

    return user;
}

userSchema.statics.login = async function(email, password) {
    if(!email || !password) throw Error('All fields must be filled');
    const user = await this.findOne({ email }).populate('cart');
    if(!user){
        throw Error('Email not registered/Incorrect Email');
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match) throw Error('Incorrect password');

    return user;
}

module.exports = mongoose.model('User', userSchema);
