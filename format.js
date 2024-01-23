function README(response = {}) {
    const contents = [];
    let fileText = ``;
    let tableContents = '';

    // Add various sections if content is not empty
    if (response.install != '') {
        contents.push(`[Installation](#install)`);
        // template literal
        fileText = `${fileText}
## <a id='install'>Installation</a>

${response.install}
`;
    }

    contents.push(`[Usage](#usage)`);
    // template literal
    fileText = `${fileText}
## <a id='usage'>Usage</a>

${response.usage}
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
    
    contents.push(`[Questions](#questions)`);
    // template literal
    fileText = `${fileText}
## <a id='questions'>Questions</a>

If you have any questions, contact me using the following links:
- Email: (${response.email})
- GitHub: [${response.username}](https://github.com/${response.username})
`;
    }

    contents.forEach((section, index) => {
        // template literal
        tableContents = `${tableContents}
${index + 1}. ${section}`
    });

    // Craft full README with filled sections
    // template literal
    fileText = `# ${response.title} 

## Description

${response.description}

## Table of Contents ${tableContents}
${fileText}`;

    return fileText;
}

module.exports = {
    README
};

// TODO:
// ADD QUESTIONS SECTION TO README
    // INCLUDES USERNAME AND EMAIL