const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

router.get('/', (req, res) => {
    res.render('index', { title: 'Home', path: req.path });
});

router.get('/about', (req, res) => {
    res.render('about', { title: 'About Us', path: req.path });
});

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us', path: req.path });
});

router.get('/services', (req, res) => {
    res.render('services', { title: 'Our Services', path: req.path });
});

module.exports = router;