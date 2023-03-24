"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PagesController {
    // GET /
    static getIndex(req, res) {
        res.render('indexPage', { title: 'Hello!' });
    }
    // GET /Skills&Traits
    static getSkills(req, res) {
        res.render('SkillsPage', { title: 'Welcome!' });
    }
    // GET /SiteFeatures
    static getSiteFeatures(req, res) {
        res.render('SiteFeaturesPage', { title: 'Welcome!' });
    }
    // GET /contactInfo
    static getContact(req, res) {
        res.render('ContactInfoPage', { title: 'Welcome!' });
    }
}
exports.default = PagesController;
