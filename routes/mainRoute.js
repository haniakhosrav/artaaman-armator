const express = require('express');

const {
    getMain,
    getAbout,
    getContact,
    getNews,
    getGallery
} = require('../controller/pagesController');

const router = express.Router();

router.get('/', getMain);
router.get('/about', getAbout);
router.get('/contact', getContact);
router.get('/news', getNews);
router.get('/gallery', getGallery);

module.exports = router;