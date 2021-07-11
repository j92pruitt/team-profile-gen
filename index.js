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

managerPrompt.query()
    .then( answer => {
        console.log(answer)
        
        selectorPrompt.query()
            .then( answer => console.log(answer))
    } )