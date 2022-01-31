const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 10
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 10
    }
});

const admin = mongoose.model('admin', adminSchema);

module.exports = admin;