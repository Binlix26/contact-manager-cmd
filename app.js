#!/usr/bin/env node

require('./lib/database'); // MongoDB connection
const program = require('commander');
const { prompt } = require('inquirer');
// Craft questions to present to users
const questions = [
    {
        type : 'input',
        name : 'firstname',
        message : 'Enter firstname ...'
    },
    {
        type : 'input',
        name : 'lastname',
        message : 'Enter lastname ...'
    },
    {
        type : 'input',
        name : 'phone',
        message : 'Enter phone number ...'
    },
    {
        type : 'input',
        name : 'email',
        message : 'Enter email address ...'
    }
];
const app = require('./lib/program');

program
    .version('0.0.1')
    .description('Contact management system');

program
    .command('add-contact') // No need of specifying arguments here
    .alias('a')
    .description('Add a contact')
    .action(() => {
        prompt(questions).then(answers =>
            app.addContact(answers));
    });

program
    .command('get-contact <name>')
    .alias('r')
    .description('Get contact')
    .action(name => app.getContact(name));

program.parse(process.argv);

