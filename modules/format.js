const licenseMaker = require('./licenseMaker');

function README(response = {}) {
    const contents = [];
    let fileText = ``;
    let tableContents = '';
    const license = licenseMaker.craftLicense(response.license, response.fullname.trim())

    // Add various sections if content is not empty
    if (response.install != '') {
        contents.push(`[Installation](#install)`);
        // template literal
        fileText = `${fileText}
## <a id='install'>Installation</a>

${response.install.trim()}
`;
    }

    contents.push(`[Usage](#usage)`);
    // template literal
    fileText = `${fileText}
## <a id='usage'>Usage</a>

${response.usage.trim()}
`;

    if (response.contribute != '') {
        contents.push(`[Contribution](#contribute)`);
        // template literal
        fileText = `${fileText}
## <a id='contribute'>Contribution</a>

${response.contribute}
`;
    }

    if (response.test != '') {
        contents.push(`[Test Instructions](#test)`);
        // template literal
        fileText = `${fileText}
## <a id='test'>Test Instructions</a>

${response.test}
`;
    }
    
    contents.push(`[License](#license)`);
    // template literal
    fileText = `${fileText}
## <a id='license'>License</a>

This application is covered under the ${response.license} license.
`;
    contents.push(`[Questions](#questions)`);
    // template literal
    fileText = `${fileText}
## <a id='questions'>Questions</a>

If you have any additional questions, contact me using the following links:
- Email: [${response.email.trim()}]
- GitHub: [${response.username.trim()}](https://github.com/${response.username.trim()})
`;

    contents.forEach((section, index) => {
        // template literal
        tableContents = `${tableContents}
${index + 1}. ${section}`
    });

    // Craft full README with filled sections
    // template literal
    fileText = `${license.badge}

# ${response.title.trim()} 

## Description

${response.description.trim()}

## Table of Contents ${tableContents}
${fileText}

## Acknowledgements

Special thanks to the following sources for providing functionality and general guidance help:
- Special thanks to [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) for the prompt functionality
- Thank you to [Shields.io](https://shields.io/) for crafting license badges
- BIG thank you to [Lukas](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba) for providing the Shield.io links for the license badges
- Thank you to [choosealicense.com](https://choosealicense.com/licenses/) for providing the text content for various licenses`;

    return fileText;
}

// export helper function
module.exports = {
    README
};
