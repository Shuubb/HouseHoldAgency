
class PagesController {
    // GET /
    index(req, res) 
    {
        res.render('indexPage', { title: 'Hello!' });
    }

    // GET /Skills&Traits
    skills(req, res) 
    {
        res.render('SkillsPage', { title: 'Welcome!' });
    }

    // GET /SiteFeatures
    siteFeatures(req, res) 
    {
        res.render('SiteFeaturesPage', { title: 'Welcome!' });
    }

    // GET /contactInfo
    contact(req, res) 
    {
        res.render('ContactInfoPage', { title: 'Welcome!' });
    }

}

module.exports = PagesController;