const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const app = express();
const port = parseInt(process.env.PORT) || 3000;

app.use(express.static('public'));
app.use(expressEjsLayouts);

app.set('layout', './shared/layout');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('indexPage', { title: 'Hello!' });
})

app.get('/Skills&Traits', function (req, res) {
  res.render('HomePage', { title: 'Welcome!' });
})

app.get('/SiteFeatures', function (req, res) {
  res.render('SiteFeaturesPage', { title: 'Welcome!' });
})

app.get('/ContactInfo', function (req, res) {
  res.render('ContactInfoPage', { title: 'Welcome!' });
})


app.listen(port, '192.168.100.5' | 'localhost' , () => console.log(`Now Listening To Port:${port}`));

module.exports = app;