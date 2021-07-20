const { cardTemplate } = require("../src/html-template");
const Employee = require("./Employee");

class Intern extends Employee {

    constructor(name, id, email, school) {

        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }

    generateHtml() {
        return `<div class="col my-2">
    <div class="shadow rounded">
        <div class="container-fluid text-light p-3 bg-primary rounded-top shadow">
            <h2>${this.name}</h2>
            <h3>${this.getRole()}</h3>
        </div>
        <div class="container-fluid bg-light px-3 py-5 rounded-bottom">
            <ul class="list-group">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                <li class="list-group-item">School: ${this.school}</li>
            </ul>
        </div>
    </div>
</div>`
    }
}

module.exports = Intern;