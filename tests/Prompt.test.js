const { describe, it, expect} = require('@jest/globals');
const Prompt = require('../lib/Prompt');
const inquirer = require('inquirer');

jest.mock('inquirer')

describe('Prompt', () => {
    describe('Initialization', () => {

        it('should create an object with "questions" property set to "questions" argument provided when called with "new" keyword.', () => {

            const questions = ['Q1','Q2'];

            const obj = new Prompt(questions)

            expect(obj).toHaveProperty('questions', questions)
        });
    });

    describe('Query', () => {

        it('should call "inquirer.prompt" with the "questions" as input', () => {

            const questions = ['Q1','Q2'];

            const obj = new Prompt(questions)

            inquirer.prompt.mockReturnValue(
                new Promise(function(resolve) {
                    resolve({Q1 : "A1", Q2: "A2"})
                })
            );

            expect(obj.query()).resolves.toEqual({Q1 : "A1", Q2: "A2"})
            expect(inquirer.prompt).lastCalledWith(questions)
        })
    })
})