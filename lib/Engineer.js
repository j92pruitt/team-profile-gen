const { cardTemplate } = require("../src/html-template");
const Employee = require("./Employee");

class Engineer extends Employee {

    /**
     * 
     * @param {string} name 
     * @param {string} id 
     * @param {string} email 
     * @param {string} github github username
     */
    constructor(name, id, email, github) {

        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer'
    }

    generateHtml() {
        return cardTemplate(this.name, this.getRole(), this.id, this.email,'Github',this.github);
    }
}

module.exports = Engineer;