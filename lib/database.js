const mongoose = require('mongoose');
const server = '127.0.0.1:27017';
const database = 'contact-manager';

class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose.connect(`mongodb://${server}/${database}`, {
            useNewUrlParser: true,
            useCreateIndex: true
        })
            .then(() => console.log('Database connection successful'))
            .catch(err => console.log(err));
    }
}
// Singleton object
module.exports = new Database();