const inquirer = require('inquirer')

class Prompt {
    constructor(questions) {
        this.questions = questions;
    };

    query() {
        return inquirer.prompt(this.questions);
    }
}

module.exports = Prompt;