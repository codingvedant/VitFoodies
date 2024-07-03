const express = require('express');
const { addToCart, updateCartItem, removeCartItem } = require('../controllers/cartController');
const cors = require('cors');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();
router.use(cors());
//router.use(requireAuth);

router.post('/add', addToCart);
router.post('/update', updateCartItem);
router.post('/remove', removeCartItem);

module.exports = router;
