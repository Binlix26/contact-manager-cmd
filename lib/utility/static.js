// Craft questions to present to users
const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Enter firstname ...'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Enter lastname ...'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Enter phone number ...'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address ...'
    }
];

module.exports = {
    questions: questions
}