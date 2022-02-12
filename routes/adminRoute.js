const upload = require('../config/multer');

const express = require('express');
const {
    getAdminLogin,
    handleAdminLogin,
    getAdminPanel,
    handleNews,
    handleLoadingNews,
    deleteArticle,
} = require('../controller/adminController')

const router = express.Router();

router.get('/adminlogin', getAdminLogin);
router.get('/adminpanel', getAdminPanel);
router.post('/adminlogin', handleAdminLogin);
router.post('/handlenews', upload.single('image'), handleNews);
router.post('/editarticle/:id', upload.single('image'), handleNews);
router.get('/news/:id', handleLoadingNews);
router.get('/deletearticle/:id', deleteArticle);


module.exports = router;
