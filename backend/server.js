require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const recipesRoutes = require('./routes/recipes');
const userRoutes = require('./routes/user');
const cartRoutes = require('./routes/cart'); // Import cart routes

mongoose.set('strictQuery', true);

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/recipes', recipesRoutes);
app.use('/api/user', userRoutes);
app.use('/api/cart', cartRoutes); // Use cart routes

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB and listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });
