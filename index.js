const inquirer =require ("inquirer");

const { writeFile } = require("fs").promises;

const SVG = require ("./lib/SVG")

const { Circle, Square, Triangle } = require("./lib/shapes")

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
        choices: ['Circle', 'Triangle', 'Square'],
       
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Whats the color you want in the shape?(color keyword or a hexadecimal number)',
        
    },
];

inquirer.prompt(questions).then(({ shapeText, textColor, shapes, shapeColor }) => {
    let shape;

    switch (shapes) {
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Circle':
            shape = new Circle();
            break;
        default:
            shape = new Square();
            break;
    }

    shape.setColor(shapeColor)
    const svg = new SVG()
    svg.setText(shapeText, textColor)
    svg.setShape(shape)
    return writeFile("./Examples/logo.svg", svg.render())
})
    .then(() => console.log("Generated logo.svg"))

    .catch(err => console.log(err)); 

