const Prompt = require("./lib/prompt");

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

function init() {
    createTeamMember('Manager')
}

function createTeamMember(job) {
    if (job === 'Engineer') {
        engineerPrompt.query()
            .then(
                // Placeholder for engineer creation
                // Placeholder for adding engineer to team
                runSelection
            );
    } else if (job === 'Intern') {
        internPrompt.query()
            .then(
                // Placeholder for intern creation
                // Placeholder for adding intern to team
                runSelection
            );
    } else if (job === 'Manager') {
        managerPrompt.query()
            .then(
                // Placeholder for manager creation
                // Placeholder for adding manager to team
                runSelection
            );
    } else {
        Error(`Unexpected job selection: ${job}`)
    }
}

function runSelection() {
    selectorPrompt.query()
        .then(
            ({choice : choice}) => {
                console.log(choice)
                if (choice === 'Finished adding team members') {
                    return console.log('Generating HTML');
                 } else {
                    return createTeamMember(choice);
                 }
            }
        );
}

init();