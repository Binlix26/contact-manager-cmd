const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

module.exports = function () {
    const contactSchema = new Schema({
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            validate: (value) => {
                return validator.isEmail(value);
            }
        },
        firstname: {type: String, lowercase: true},
        lastname: {type: String, lowercase: true},
        phone: Number,
        dateAdded: {type: Date, default: Date.now()}
    });
    mongoose.model('Contact', contactSchema);
}