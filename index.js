// GIVEN a command-line application that accepts user input
    // use inquirer `types` to prompt user for various inputs

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

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    // prompt type: 'input'? 
    // maybe something more suited to long strings of text

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    // prompt type: 'list' OR 'rawlist' with options for licenses

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    // prompt type: 'input' for username

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    // prompt type: 'input' for email
    // might look for more email-suited prompt type

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
    // have to look at the markdown syntax for this