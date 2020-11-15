
const inquirer = require('inquirer');
const fs       = require('fs');
var data = '';
var answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8;    
var badgeLink, badgeUrl;

fs.writeFile('ReadMe.md', data, function (err) {
    if (err) throw err;
    console.log('File Created Successfully');
}); 

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter Project Title: ',
            default: 'Project ReadMe',
            
        }, {
            type: 'input',
            name: 'description',
            message: 'Enter Project Description: ',
            default: 'This Is The Project ReadMe.',
           
        }, {
            type: 'list',
            name: 'license',
            message: 'Choose A License: ',
            choices: ['MIT', 'GPLv3'],
        }, {
            type: 'input',
            name: 'repo',
            message: 'Enter GitHub UserName: ',
            default: 'N/A',
        }, {
            type: 'input',
            name: 'usage',
            message: 'Enter Usage: ',
            default: 'This is the software being used.',
        }, {
            type: 'input',
            name: 'contributing',
            message: 'Enter Contributors: ',
            default: 'This software has contributors.',
        }, {
            type: 'input',
            name: 'tests',
            message: 'Enter Something about Tests: ',
            default: 'This software has two tests and a pencil.',
        }, {
            type: 'input',
            name: 'installation',
            message: 'Enter Installation Instructions: ',
            default: 'This software needs to be installed.'
        }
    ])
    .then(answers => {
        answer1= answers.title;
        answer2= answers.description;
        answer3= answers.license;
        answer4= answers.repo;
        answer5= answers.usage;
        answer6= answers.contributing;
        answer7= answers.tests;
        answer8= answers.installation;

        badgeLink  = '![License: '+answer3+'](https://img.shields.io/badge/License-'+answer3+'-blue.svg)';    
        
        fs.appendFile('ReadMe.md', 
`
Table of Contents:  
<a href="#questions">Questions</a>

Title: ${answer1}
Description: ${answer2}
License badge: ${badgeLink}
Instructions for installation: ${answer8}
Usage: ${answer5}
License notice: "This software is covered under the ${answer3} license."
Contributors & Contributing: "Project Contributors: ${answer6}
Tests: ${answer7}
### Questions: {#questions} "Please direct all questions to ${answer4}@email.com."
`,
            function(err) {
                if (err) throw err;
                console.log();
            });
    })
    .catch(error => {
        if (error.isTtyError) {
            console.log('ERROR');
        }//else
    }); 

    
    