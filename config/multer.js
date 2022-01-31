const multer = require('multer');
const uuid = require('uuid').v4;

//? multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/NEWS')
    },
    filename: (req, file, cb) => {
        cb(null, `${uuid()}_${file.originalname}`);
    }
});
const upload = multer({storage});

module.exports = upload;