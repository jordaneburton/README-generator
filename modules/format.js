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

If you have any questions, contact me using the following links:
- Email: (${response.email.trim()})
- GitHub: [${response.username.trim()}](https://github.com/${response.username.trim()})
`;
    }

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
${fileText}`;

    return fileText;
}

// export helper function
module.exports = {
    README
};

// TODO:
// ADD QUESTIONS SECTION TO README
    // INCLUDES USERNAME AND EMAIL