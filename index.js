// GIVEN a command-line application that accepts user input
    // use inquirer `types` to prompt user for various inputs

const fs = require('fs');
const inquirer = require('inquirer');
const format = require('./format.js');

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    // we're going to need prompts for AT LEAST:
    // - title
    // - description
    // - installation
    // - usage
    // - license
    // - contributing
    // - tests 
    // - questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README
    // prompt type: 'input' for title name
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Input the repository title:',
        },
        
        // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
        // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
            // prompt type: 'input'? 
            // maybe something more suited to long strings of text
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project:',
        },
        {
            type: 'input',
            name: 'install',
            message: `Provide instructions on how to install the project:
(If not applicable, leave empty and press enter):`,
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide any important usage information for the project:',
        },
        {
            type: 'input',
            name: 'contribute',
            message: `Provide guidelines for contributing to the project
(If not applicable, leave empty and press enter):`,
        },
        {
            type: 'input',
            name: 'test',
            message: `Provide test instructions for the project:
(If not applicable, leave empty and press enter):`,
        },
        
        // WHEN I choose a license for my application from a list of options
        // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
            // prompt type: 'list' OR 'rawlist' with options for licenses
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for the application:',
            choices: ['MIT', 'license 1', 'license 2', 'license 3'],
        },
        
        // WHEN I enter my GitHub username
        // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
            // prompt type: 'input' for username
        {
            type: 'input',
            name: 'username',
            message: 'Provide your GitHub username:',
        },
        
        // WHEN I enter my email address
        // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
            // prompt type: 'input' for email
            // might look for more email-suited prompt type
        {
            type: 'input',
            name: 'email',
            message: 'Provide your email address:',
        }
    ])
    .then((data) => {
        // console.log(JSON.stringify(data, null, '\t'));
        const text = (data);
        console.log(format.README(text));
    })
    
    // WHEN I click on the links in the Table of Contents
    // THEN I am taken to the corresponding section of the README
        // have to look at the markdown syntax for this



// TODO: 
// CONNECT LICENSE TO TOP OF README
// LINK EMAIL AND USERNAME TO PROFILES
