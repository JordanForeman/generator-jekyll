const Generator = require('yeoman-generator');
const questions = require('./config/inputs');
const files = require('./config/manifest');

function copyTemplateFile(filename) {
    this.fs.copyTpl(
        this.templatePath(filename),
        this.destinationPath(filename),
        this.configuration
    );
}

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.copyTemplateFile = copyTemplateFile.bind(this);
    }

    async prompting() {
        this.configuration = await this.prompt(questions);
        this.destinationRoot(this.configuration.appName);
    }

    writing() {
        files.forEach(this.copyTemplateFile);
    }

    install() {
        this.npmInstall();
    }
};