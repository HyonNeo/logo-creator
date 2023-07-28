const inquirer =require ("inquirer");

const fs= require ("fs");

const questions = [
    {
        type: 'input',
        name: 'shapeText',
        message: 'Welcome to the Logo Maker! what characters you want to add?(only up 3 characters):',
          validate: function (value) {
            if (value.length > 3 ){
                return "Please, enter up to 3 characters"
            } else {
                return true
            }
          }
    },
    {
        type: 'input',
        name: 'shapeTextColor',
        message: 'Whats the color you want in the characters?(color keyword or a hexadecimal number)',
        
    },

    {
        type: 'list',
        name: 'shapes',
        message: 'What shape you want in the logo?',
        choices: ['circle', 'triangle', 'square'],
       
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Whats the color you want in the shape?(color keyword or a hexadecimal number)',
        
    },
];


