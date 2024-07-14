const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes/index');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', routes);sdsdds

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));