const { describe, it, expect} = require('@jest/globals')
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {

    describe('Initialization', () => {

        it('should extend the Empolyee class.', () => {

            const obj = new Engineer('Eric', '2', 'eric@test.com', 'EngiEric');

            expect(obj).toBeInstanceOf(Employee);
        })

        it('should create an object with "github" property set to "github" parameter.', () => {

            const obj = new Engineer('Eric', '2', 'eric@test.com', 'EngiEric');

            expect(obj).toHaveProperty('github', 'EngiEric');
        })
    })

    describe('getGithub', () => {

        it('should return the current value of the github attribute.', () => {

            const obj = new Engineer('Eric', '2', 'eric@test.com', 'EngiEric');

            expect( obj.getGithub() ).toBe('EngiEric')
        })
    })

    describe('getRole', () => {

        it('should return "Engineer".', () => {

            const obj = new Engineer('Eric', '2', 'eric@test.com', 'EngiEric');

            expect( obj.getRole() ).toBe('Engineer')
        })
    })
})