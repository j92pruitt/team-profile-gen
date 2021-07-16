const Employee = require("./Employee");

class Manager extends Employee {
    
    /**
     * Represents a manager of a team.
     * @param {string} name 
     * @param {string} id 
     * @param {string} email 
     * @param {string} office - office number
     */
    constructor(name, id, email, office) {
        
        super(name, id, email)

        this.office = office;
    }

    getRole() {
        return('Manager')
    }
}

module.exports = Manager;