const newsModel = require('../model/newsModel');
const {formatDate} = require('../utils/jalali');

//? loading homePage
exports.getMain = async (req, res) => {
    await newsModel
    res.render('mainPage', {
            
    });
}

//? loading aboutPage
exports.getAbout = (req, res) => res.render('aboutPage');

//? loading contactPage
exports.getContact = (req, res) => res.render('contactPage');

//? loading galleryPage
exports.getGallery = (req, res) => res.render('galleryPage');

//? loading news page

exports.getNews = async (req, res) => {

    try {
        const news = await newsModel.find();
        res.render('newsPage', {
            news: news.reverse(),
            error: req.flash('err'),
            formatDate,
        })
    } catch (err) {
        req.flash('err', 'مشکلی در ارتباط با سرور وجود دارد');
        res.redirect('/');
    }
}