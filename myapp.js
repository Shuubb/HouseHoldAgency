const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const PagesController = require('./Controllers/PagesController.js');

const pagesController = new PagesController();
const app = express();
const port = parseInt(process.env.PORT) || 3000;


app.use(express.static('public'));
app.use(expressEjsLayouts);

app.set('layout', './shared/layout');
app.set('view engine', 'ejs');

app.get('/', pagesController.index);
app.get('/Skills&Traits', pagesController.skills);
app.get('/SiteFeatures', pagesController.siteFeatures);
app.get('/ContactInfo', pagesController.contact);


app.listen(port, '192.168.100.5' | 'localhost' , () => console.log(`Now Listening To Port:${port}`));

module.exports = app;