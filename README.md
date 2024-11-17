
# Vit Foodies - Interactive E-Menu Website

# The site is live!
[https://vitfoodies.onrender.com](https://vitfoodies-site.onrender.com)


## Description
Vit Foodies is a user-friendly, visually appealing E-Menu website built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). It empowers users to explore a delightful culinary selection and place orders seamlessly.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- **User Authentication**: Register and log in to your account.
- **Menu Exploration**: Browse through a variety of culinary delights.
- **Order System**: Add items to your cart and place orders.
- **Responsive Design**: Mobile-friendly and visually appealing layout with Bootstrap.
- **Interactive UI**: Smooth and interactive user experience with React.

## Technologies Used

- **Frontend**:
  - React
  - Bootstrap

- **Backend**:
  - Node.js
  - Express.js

- **Database**:
  - MongoDB

## Installation
- Node.js and npm (or yarn) installed on your system (https://nodejs.org/en)

- A MongoDB database instance (https://www.mongodb.com/)

- Clone the repository:
   ```sh
   git clone https://github.com/yourusername/e-menu-website.git

- Navigate to the project directory:

  ```sh
  cd vit-foodies

- Install Server Dependencies:
  ```sh
  cd backend
  npm install (or yarn install)

- Install Client Dependencies:
  ```sh
  cd ../frontend
  npm install (or yarn install)

- Configure Database Connection:

  - Create a .env file in the project root directory.

  - Add the following environment variable, replacing <your_mongodb_uri> with your actual MongoDB connection URI:
    ```sh
    PORT=4000
    MONGO_URI=your_mongodb_uri
    SECRET=your_ecret

- Start the Development Server:
    ```sh
    npm start (or yarn start)
    ```
    This will typically start the server on port 3000 (http://localhost:3000).

## Contributing
  - Fork the repository.
  - Create your feature branch:
  ```sh
  git checkout -b feature/your-feature-name
  ```
  - Commit your changes
  ```sh
  git commit -m 'Add some feature'
  ```
  - Push to the branch
  ```sh
  git push origin feature/your-feature-name
  ```
  - Open a pull request


## Contact

  - **Name** - Vedant Bhalerao
  - **Email** - vedantbhalerao315@gmail.com
  - **LinkedIn** - https://www.linkedin.com/in/vedant-bhalerao/
## Deployment
### Deploying on Vercel

#### Frontend Deployment
1. Create a Vercel account at https://vercel.com if you haven't already
2. Install Vercel CLI globally:
   ```sh
   npm install -g vercel
   ```
3. Navigate to your frontend directory:
   ```sh
   cd frontend
   ```
4. Create a `vercel.json` file in your frontend directory:
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "package.json",
         "use": "@vercel/static-build",
         "config": { "distDir": "build" }
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "/index.html"
       }
     ]
   }
   ```
5. Deploy to Vercel:
   ```sh
   vercel
   ```
   Follow the prompts to complete the deployment.

#### Backend Deployment
1. Navigate to your backend directory:
   ```sh
   cd backend
   ```
2. Create a `vercel.json` file in your backend directory:
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "server.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "/server.js"
       }
     ]
   }
   ```
3. Update your frontend API configuration to use the new backend URL
4. Add environment variables in Vercel:
   - Go to your project settings in Vercel
   - Navigate to the "Environment Variables" section
   - Add your `MONGO_URI` and `SECRET`
5. Deploy the backend:
   ```sh
   vercel
   ```

#### Important Notes
- Ensure your MongoDB instance allows connections from Vercel's IP addresses
- Update CORS settings in your backend to allow requests from your frontend domain
- Make sure all environment variables are properly set in Vercel's dashboard
- The frontend needs to be configured to point to the deployed backend URL


**I hope this enhanced README.md file provides a clear and informative guide for your E-Menu website!**
