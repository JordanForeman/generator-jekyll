module.exports = [
    {
        type: 'input',
        name: 'appName',
        message: 'What is the name of your app?'
    },
    {
        type: 'input',
        name: 'rootDomain',
        message: 'What is your application\'s root domain?'
    },
    {
        type: 'input',
        name: 'subtitle',
        message: 'Give your website a subtitle'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give your website a description'
    },
    {
        type: 'input',
        name: 'tfStateBucket',
        message: 'What S3 bucket should Terraform store your state in?'
    }
];
