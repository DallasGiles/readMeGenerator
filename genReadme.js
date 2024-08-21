function generateReadme(answers) {
    return `
<h1 align="center">${answers.title} 👋</h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

## Description
🔍 ${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation
💾 ${answers.installation}

## Usage
💻 ${answers.use}

## Contributing
👪 ${answers.contributing}

## Tests
✏️ ${answers.tests}

## Questions
✋ If you have any questions, feel free to contact me:

- :octocat: GitHub: [${answers.username}](https://github.com/${answers.username})
- 📧 Email: [${answers.email}](mailto:${answers.email})

## License
📝 This project is licensed under the ${answers.license} license.
  
<br />

_This README was generated with ❤️ by [README-generator](https://github.com/DallasGiles/readMeGenerator?tab=readme-ov-file) 🔥🔥🔥_
    `;
}

module.exports = generateReadme;