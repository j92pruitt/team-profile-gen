const { describe, it, expect} = require('@jest/globals')
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Intern', () => {

    describe('Initialization', () => {

        it('should extend the Employee class.', () => {

            const obj = new Intern('Ian', '3', 'ian@test.com', 'UCLA');

            expect(obj).toBeInstanceOf(Employee);
        })

        it('should create an object with "school" attribute set to "school" parameter.', () => {

            const obj = new Intern('Ian', '3', 'ian@test.com', 'UCLA');

            expect(obj).toHaveProperty('school', 'UCLA');
        })
    })

    describe('getSchool', () => {

        it('should return current value of "school" attribute.', () => {

            const obj = new Intern('Ian', '3', 'ian@test.com', 'UCLA');

            expect( obj.getSchool() ).toBe('UCLA');
        })
    })

    describe('getRole', () => {

        it('should return "Intern"', () => {

            const obj = new Intern('Ian', '3', 'ian@test.com', 'UCLA');

            expect( obj.getRole() ).toBe('Intern');
        })
    })
})