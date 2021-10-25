const multer = require('multer')
const path = require('path')
const uuid = require('uuid')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },

    filename: (req, file, cb) => {
        let filename = `${uuid.v4()}${path.extname(file.originalname)}`;
        cb(null, filename);
    },


})

const upload = multer({ storage: storage })

module.exports = upload;