const express = require('express');
const app = express();
const port = 3000;

// Sample data for items
const items = ['Apple', 'Banana', 'Orange'];

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Middleware to log requests
app.use ((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Handle GET requests to /items
app.get('/items', (req, res) => {
    res.json(items);
});

// Handle POST requests to /submit
app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});

// Handle GET requests to /about
app.get('/about', (req, res) => {
    res.send('About Us');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app .listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Handle GET requests to the root and about pages
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Handle POST requests to /items
app.post('/items', (req, res) => {
    const newItem = req.body.item;
    items.push(newItem);
    res.json(items);
});