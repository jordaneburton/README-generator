[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# README Generator 

## Description

The README Generator utilizes the Inquirer node.js package to craft a README and your LICENSE files all via the terminal. The application prompts you for information on various sections of the resume and then fills those sections according to your responses. In addition, some sections are optional to fill out since they are not always applicable. In short, this application is supposed to serve as a quick-and-easy all-in-one file maker for those important files that you don't want to create by hand!

## Table of Contents 
1. [Installation](#install)
2. [Usage](#usage)
3. [Contribution](#contribute)
4. [License](#license)
5. [Questions](#questions)

## <a id='install'>Installation</a>

This application does require node.js and therefore, you must install it before you can use the application. If you haven't installed node.js, use the following link [https://nodejs.org/en/download] and install the proper version according to your OS. Once installed, run the node setup executable. Once node.js is setup on your system, go to the directory where you plan to download the repository and run the command `npm init -y` in your terminal. Then run `npm i inquirer@8.2.4` and now you will be able to download the repository into the directory.

## <a id='usage'>Usage</a>

To use the application, go to the repository's directory and run the command `node index` in your terminal. Shortly thereafter, the application will prompt you with various questions in order to fill out the README. Note, for all inputs where you must type out your input **THE APPLICATION DOES TAKE MARKDOWN SYNTAX** and is designed for this.

## <a id='contribute'>Contribution</a>

I have decided to adopt the [Contributer Convenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) for my project. If you would like to add more license support, all license information goes into 'licenseMaker.js' inside of the modules folder. You can utilize the links in the Acknowledgements section for the corresponding badge links and license text. Once the license info is inserted into 'licenseMaker.js' insert the license type as an option in 'index.js'. For the time being, I will moderate all contributions and violations myself. To report any violations, contact me using my contact links in the [Questions](#questions) section.

## <a id='license'>License</a>

This application is covered under the MIT license.

## <a id='questions'>Questions</a>

If you have any additional questions, contact me using the following links:
- Email: [jordane.burton@gmail.com]
- GitHub: [jordaneburton](https://github.com/jordaneburton)


## Acknowledgements

Special thanks to the following sources for providing functionality and general guidance help:
- Special thanks to [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) for the prompt functionality
- Thank you to [Shields.io](https://shields.io/) for crafting license badges
- BIG thank you to [Lukas](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba) for providing the Shield.io links for the license badges
- Thank you to [choosealicense.com](https://choosealicense.com/licenses/) for providing the text content for various licenses