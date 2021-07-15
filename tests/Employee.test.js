const { describe, it, expect} = require('@jest/globals')
const Employee = require('../lib/Employee');

describe('Employee', () => {

    describe('Initialization', () => {

        it('should should create an object with "name" property set to "name" parameter.', () => {

            const obj = new Employee('test name', '0', 'email@test.com');

            expect(obj).toHaveProperty('name', 'test name');
        })

        it('should should create an object with "id" property set to "id" parameter.', () => {

            const obj = new Employee('test name', '0', 'email@test.com');

            expect(obj).toHaveProperty('id', '0');
        })

        it('should should create an object with "email" property set to "email" parameter.', () => {

            const obj = new Employee('test name', '0', 'email@test.com');

            expect(obj).toHaveProperty('email', 'email@test.com');
        })
    })

})