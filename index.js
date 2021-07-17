const Engineer = require("./lib/Engineer");
const Prompt = require("./lib/Prompt");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const template = require('./src/html-template')
const fs = require('fs')

managerPrompt = new Prompt( [
    {
        type : 'input',
        message : 'What is your name?',
        name : 'name'
    },
    {
        type : 'input',
        message : 'What is your employee id number?',
        name : 'id'
    },
    {
        type : 'input',
        message : 'What is your email?',
        name : 'email'
    },
    {
        type : 'input',
        message : 'What is your office number?',
        name : 'office'
    }
] )

selectorPrompt = new Prompt( [
    {
        type : 'list',
        message : 'Who do you want to add to your team?',
        choices : ['Engineer', 'Intern', 'Finished adding team members'],
        name : 'choice'
    }
] )

engineerPrompt = new Prompt( [
    {
        type : 'input',
        message : 'What is their name?',
        name : 'name'
    },
    {
        type : 'input',
        message : 'What is their employee id number?',
        name : 'id'
    },
    {
        type : 'input',
        message : 'What is their email?',
        name : 'email'
    },
    {
        type : 'input',
        message : 'What is their GitHub username?',
        name : 'username'
    }
] )

internPrompt = new Prompt( [
    {
        type : 'input',
        message : 'What is their name?',
        name : 'name'
    },
    {
        type : 'input',
        message : 'What is their employee id number?',
        name : 'id'
    },
    {
        type : 'input',
        message : 'What is their email?',
        name : 'email'
    },
    {
        type : 'input',
        message : 'What school do they attend?',
        name : 'school'
    }
] )

const team = [];

function init() {
    createTeamMember('Manager')
}

function createTeamMember(job) {
    if (job === 'Engineer') {
        engineerPrompt.query()
            .then( (answers) => {
                team.push( new Engineer(answers.name, answers.id, answers.email, answers.username) );
                return runSelection()
            })
    } else if (job === 'Intern') {
        internPrompt.query()
            .then( (answers) => {
                team.push( new Intern(answers.name, answers.id, answers.email, answers.school) );
                return runSelection()
            })
    } else if (job === 'Manager') {
        managerPrompt.query()
            .then( (answers) => {
                team.push( new Manager(answers.name, answers.id, answers.email, answers.office) );
                return runSelection()
            })
    } else {
        console.log(Error(`Unexpected job selection: ${job}`))
    }
}

function runSelection() {
    selectorPrompt.query()
        .then(
            ({choice : choice}) => {
                console.log(choice)
                if (choice === 'Finished adding team members') {
                    let teamCards = ``
                    team.forEach(member => {
                        teamCards += member.generateHtml()
                    });

                    writeHtml(teamCards)
                 } else {
                    return createTeamMember(choice);
                 }
            }
        );
}

function writeHtml(teamCards) {
    fs.writeFile('./team-page.html',template.htmlTemplate(teamCards),() => {

    })
}

init();