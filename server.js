const express = require('express');
const app = express();
const helmet = require('helmet');
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

// Use helmet with custom CSP
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],  // Allow resources from same origin
            imgSrc: ["'self'", "data:", "blob:"],  // Allow images from same origin, and data/blob URIs
            scriptSrc: ["'self'"],  // Allow scripts from same origin
            styleSrc: ["'self'", "'unsafe-inline'"],  // Allow styles from same origin and inline styles
            fontSrc: ["'self'"],  // Allow fonts from same origin
            connectSrc: ["'self'"],  // Allow connections to same origin
        },
    },
}));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
});

app.get('/services', (req, res) => {
    res.render('services', { title: 'Our Services' });
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));