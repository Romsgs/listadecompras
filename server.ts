import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import main_router from './src/routes/main.router';

// ENV LOAD
const PORT =  3000;
const HOST = '0.0.0.0';  // Adicionado para ouvir em todas as interfaces

// Create express instance
const app = express();

// Middleware to parse URL-encoded bodies (form data)
app.use(express.urlencoded({ extended: true }));

// Middleware to accept JSON
app.use(express.json());

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the directory where the template files are located
app.set('views', 'views');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Use the main router
app.use(main_router);

// Run server
app.listen(PORT, HOST, () => console.log(`Running server on http://${HOST}:${PORT}`));
