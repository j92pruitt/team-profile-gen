const inquirer = require('inquirer')

const Prompt = function (questions) {
    this.questions = questions
}

Prompt.prototype.query = function () {
    return inquirer.prompt(this.questions)
}

module.exports = Prompt;