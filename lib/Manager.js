const Employee = require("./Employee");

class Manager extends Employee {
    
    /**
     * Represents a manager of a team.
     * @param {string} name 
     * @param {string} id 
     * @param {string} email 
     * @param {string} officeNumber - office number
     */
    constructor(name, id, email, officeNumber) {
        
        super(name, id, email)

        this.officeNumber = officeNumber;
    }

    getRole() {
        return('Manager')
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
                <li class="list-group-item">Office Number: ${this.officeNumber}</li>
            </ul>
        </div>
    </div>
</div>`
    }
}

module.exports = Manager;