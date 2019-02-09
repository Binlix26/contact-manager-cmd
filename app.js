#!/usr/bin/env node

require('./lib/database'); // MongoDB connection
const program = require('commander');
const {prompt} = require('inquirer');
const {questions} = require('./lib/utility/static');
const app = require('./lib/program');

program
    .version('0.0.1')
    .description('Contact management system');

program
    .command('add') // No need of specifying arguments here
    .alias('a')
    .description('Add a contact')
    .action(() => {
        prompt(questions).then(answers =>
            app.addContact(answers));
    });

program
    .command('get <name>')
    .alias('r')
    .description('Get contact')
    .action(name => app.getContact(name));

program
    .command('update <_id>')
    .alias('u')
    .description('Update contact')
    .action(_id => {
        prompt(questions).then((answers) =>
            app.updateContact(_id, answers));
    });

program
    .command('delete <_id>')
    .alias('d')
    .description('Delete contact')
    .action(_id => app.deleteContact(_id));

program
    .command('list')
    .alias('l')
    .description('List contacts')
    .action(() => app.getContactList());


// Assert that a VALID command is provided
if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
    program.outputHelp();
    process.exit();
}

program.parse(process.argv);

