const mongoose = require('mongoose');
require('../models/contact')();
const Contact = mongoose.model('Contact');

/**
 * @function  [addContact]
 * @returns {String} Status
 */
const addContact = (contact) => {
    Contact.create(contact, function (err, small) {
        if (err) return console.error(err);
        // saved!
        console.info('New Contact Added');
        mongoose.disconnect();
    });
}

/**
 * @function  [getContact]
 * @returns {Json} Contact
 */
const getContact = (name) => {
    const search = new RegExp(name, 'i');
    Contact.find(
        {
            $or: [
                {firstname: search},
                {lastname: search}
            ]
        })
        .exec((err, contacts) => {
            console.info(contacts);
            console.info(`${contacts.length} matches`);
            mongoose.disconnect();
        });
}

module.exports = {
    addContact,
    getContact
    // getContactList,
    // updateContact,
    // deleteContact
};