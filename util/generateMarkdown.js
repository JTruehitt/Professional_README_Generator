// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") return "";
  else {
    license = license.replace(/ /g, "%20");
    return `![Badge for license type](https://img.shields.io/badge/license-${license}-green)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") return "";
  else {
    const licenseMap = new Map([
      ["GNU AGPLv3", "agpl-3.0"],
      ["GNU GPLv3", "gpl-3.0"],
      ["GNU LGPLv3", "lgpl-3.0"],
      ["Mozilla Public License 2.0", "mpl-2.0"],
      ["Apache License 2.0", "apache-2.0"],
      ["MIT License", "mit"],
      ["Boost Software License 1.0", "bsl-1.0"],
      ["The Unlicense", "unlicense"],
    ]);
    license = licenseMap.get(license);
  }
  return `https://choosealicense.come/licenses/${license}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None")
    return `This application is not covered under any license.`;
  else {
    let link = renderLicenseLink(license);
    return `This application is covered under the ${license}\nFor more information about the ${license} license, please visit the following link:\n
  ${link}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let tableOfContents = `
  ## Table of Contents
  `;

  if (data.installation.length !== 0)
    tableOfContents += `
  * [Installation](#installation)
  `;
  if (data.usage.length !== 0)
    tableOfContents += `
  * [Usage](#usage)
  `;
  if (data.credits.length !== 0)
    tableOfContents += `
  * [Credits](#credits)
  `;
  tableOfContents += `
  * [License](#license)
  `;
  if (data.features.length !== 0)
    tableOfContents += `
  * [Features](#features)
  `;
  if (data.contributors.length !== 0)
    tableOfContents += `
  * [Contributing](#contributing)
  `;
  if (data.tests.length !== 0)
    tableOfContents += `
  * [Testing](#testing)
  `;
  tableOfContents += `
  * [Questions](#questions)
  `;

  let markdown = `
  ${renderLicenseBadge(data.license)}


  # ${data.title}

  ## Description
   ${data.description}
  `;

  markdown += tableOfContents;

  if (data.installation.length !== 0)
    markdown += `
  ## Installation
  ${data.installation}
  `;

  if (data.usage.length !== 0)
    markdown += `
  ## Usage
  ${data.usage}
  `;

  if (data.credits.length !== 0)
    markdown += `
  ## Credits
  ${data.credits}
  `;

  markdown += `
## License
${renderLicenseSection(data.license)}
`;

  if (data.features.length !== 0)
    markdown += `
  ## Features
  ${data.features}
  `;

  if (data.contributors.length !== 0)
    markdown += `
  ## Contributing
  ${data.contributors}
  `;

  if (data.tests.length !== 0)
    markdown += `
  ## Testing
  ${data.tests}
  `;

  markdown += `
  ## Questions?
  If you have any questions, please reach out!
  \nGitHub: https://github.com/${data.github}
`;

  if (data.email.length !== 0)
    markdown += `\nEmail: [${data.email}](mailto:${data.email})`;

  return markdown;
}

module.exports = generateMarkdown;
