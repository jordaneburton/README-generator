// use inquirer `types` to prompt user for various inputs

const fs = require('fs');
const inquirer = require('inquirer');
const format = require('./modules/format.js');
const licenseMaker = require('./modules/licenseMaker.js');

function init() {

    // prompt type: 'input' for title name
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Input the repository title:',
            },
            
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
            
            // prompt type: 'list' OR 'rawlist' with options for licenses
            {
                type: 'list',
                name: 'license',
                message: 'Choose a license for the application:',
                choices: ['MIT', 'BSD', 'GPL'],
            },

            {
                type: 'input',
                name: 'fullname',
                message: 'Provide first and last name for the license:',
            },
            
            // prompt type: 'input' for username
            {
                type: 'input',
                name: 'username',
                message: 'Provide your GitHub username:',
            },
            
            // prompt type: 'input' for email
            // might look for more email-suited prompt type
            {
                type: 'input',
                name: 'email',
                message: 'Provide your email address:',
            }
        ])
        .then((data) => {
            const license = licenseMaker.craftLicense(data.license, data.fullname);

            // create/overwrite README and LICENSE files
            fs.writeFile('README.md', format.README(data), (err) =>
                err ? console.error(err) : console.log('Success! README created!')
            );
            fs.writeFile('LICENSE', license.text, (err) =>
                err ? console.error(err) : console.log('Success! LICENSE created!')
            );
        })

}

init();
