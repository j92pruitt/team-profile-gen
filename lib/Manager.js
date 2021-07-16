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
}

module.exports = Manager;