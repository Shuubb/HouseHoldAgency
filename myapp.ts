import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import PagesController from './Controllers/PagesController.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(express.static('public'));
app.use(expressEjsLayouts);

app.set('layout', './shared/layout');
app.set('view engine', 'ejs');

app.get('/',                PagesController.getIndex);
app.get('/Skills&Traits',   PagesController.getSkills);
app.get('/SiteFeatures',    PagesController.getSiteFeatures);
app.get('/ContactInfo',     PagesController.getContact);


app.listen(port, () => console.log(`Now Listening To Port:${port}`));

export default app;