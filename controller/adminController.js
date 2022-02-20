const newsModel = require('../model/newsModel');
const passport = require('passport');
const {formatDate} = require('../utils/jalali');

//? loading admin login page

exports.getAdminLogin = (req, res) => {
    res.render('adminLogin', {
        error: req.flash('loginErr'),
    });
}

//? loading admin panel page

exports.getAdminPanel = async (req, res) => {
    const news = await newsModel.find();
    if(req.isAuthenticated()) return res.render('adminPanel', {
        news: news.reverse(),
        error: req.flash('error'),
        success: req.flash('success'),
    });
    return res.redirect('/adminlogin');
}

//? handling admin login

exports.handleAdminLogin = (req, res) => {

    passport.authenticate('local', {
        failureRedirect: '/adminlogin',
        successRedirect: '/adminpanel',
        failureFlash: req.flash('loginErr', 'نام کاربری یا پسورد اشتباه میباشد'),
    })(req, res);
}

//? sending news 

exports.handleNews = async (req, res) => {
    const {title, desc, label} = req.body;

    if(!title || !desc) {
        req.flash('error', 'عنوان و توضیحات مقاله را وارد کنید')
        return res.redirect('/adminpanel');
    }
    if(!label) {
        req.flash('error', 'لطفا دسته بندی مقاله را قرار دهید');
        return res.redirect('/adminpanel');
    }

    const createdOrChanged = {
        title, 
        desc, 
        label: label.trim(),
    }

    try {
        console.log(req.url)
        if(req.url == '/handlenews') {
            await newsModel.create({...createdOrChanged, 
                img: req.file == undefined ? '/images/logo-grey.svg' 
                : req.file.path.replace(/\134/g,"/").slice(6)});
            req.flash('success', 'مقاله با موفقیت افزوده شد');
        }
        else {
            await newsModel.findOneAndUpdate({_id:req.params.id}, {...createdOrChanged, 
            img: req.file == undefined ? this.img 
            : req.file.path.replace(/\134/g,"/").slice(6)});
            req.flash('success', 'مقاله با موفقیت تغییر یافت');
        }
        res.redirect('/adminpanel');
    } catch (err) {
        req.flash('error', 'مشکلی در برقراری ارتباط با سرور وجود دارد');
        res.redirect('/adminpanel');
    }
}

//? handle loading news

exports.handleLoadingNews = async (req, res) => {
    try {
        const article = await newsModel.findOne({_id: req.params.id});
        const related = await newsModel.find({label: article.label});
        const reletedExIt = related.filter(ar => ar._id != article.id);
        console.log(related)
        res.render('singleNewsPage', {
           article,
           formatDate,
           related: reletedExIt
        });
    } catch (err) {
        console.log(err);
    }
}

//? delete article

exports.deleteArticle = async (req, res) => {
    try {
        await newsModel.deleteOne({_id: req.params.id});
        req.flash('success', 'مقاله با موفقیت حذف شد');
        res.redirect('/adminpanel');
    } catch (err) {
        req.flash('error', 'مشکلی از سمت سرور وجود دارد');
        res.redirect('/adminpanel');
    }
}
