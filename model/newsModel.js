const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    title: String,
    desc: String,
    label: String,
    img: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
});

const newsModel = mongoose.model('new', newsSchema);

module.exports = newsModel;
