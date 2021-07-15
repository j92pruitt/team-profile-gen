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

    describe('getName', () => {

        it('should return the value stored in name attribute of object.', () => {

            const obj = new Employee('test name', '0', 'email@test.com');

            expect(obj.getName()).toBe('test name')
        })
    })

    describe('getId', () => {

        it('should return the value stored in id attribute of object.', () => {

            const obj = new Employee('test name', '0', 'email@test.com');

            expect(obj.getId()).toBe('0')
        })
    })

    describe('getEmail', () => {

        it('should return the value stored in email attribute of object.', () => {

            const obj = new Employee('test name', '0', 'email@test.com');

            expect(obj.getEmail()).toBe('email@test.com')
        })
    })

    describe('getName', () => {

        it('should return Employee.', () => {

            const obj = new Employee('test name', '0', 'email@test.com');

            expect(obj.getRole()).toBe('Employee')
        })
    })
})