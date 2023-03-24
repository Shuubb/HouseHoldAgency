
import {Request, Response} from 'express';

type Req = Request;
type Res = Response;

class PagesController {
    // GET /
    static getIndex(req:Req, res:Res) 
    {
        res.render('indexPage', { title: 'Hello!' });
    }

    // GET /Skills&Traits
    static getSkills(req:Req, res:Res) 
    {
        res.render('SkillsPage', { title: 'Welcome!' });
    }

    // GET /SiteFeatures
    static getSiteFeatures(req:Req, res:Res) 
    {
        res.render('SiteFeaturesPage', { title: 'Welcome!' });
    }

    // GET /contactInfo
    static getContact(req:Req, res:Res) 
    {
        res.render('ContactInfoPage', { title: 'Welcome!' });
    }

}

export default PagesController;