const mongoose = require('mongoose');
require('./database');
require('./models/contact')();

const Contact = mongoose.model('Contact');