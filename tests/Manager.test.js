const { describe, it, expect} = require('@jest/globals')
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager', () => {

    describe('Initialization', () => {

        it('should extend the Empolyee class.', () => {

            const obj = new Manager('Manny', '1', 'manny@test.com', '21');

            expect(obj).toBeInstanceOf(Employee);
        })

        it('should create an object with "officeNumber" property set to "officeNumber" parameter.', () => {

            const obj = new Manager('Manny', '1', 'manny@test.com', '21');

            expect(obj).toHaveProperty('officeNumber', '21');
        })
    })

    describe('getRole', () => {

        it('should return "Manager".', () => {

            const obj = new Manager('Manny', '1', 'manny@test.com', '21');

            expect( obj.getRole() ).toBe('Manager')
        })
    })
})