/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumbers(a, b) {
    return a + b
}
let sum = addTwoNumbers(3, 5)
console.log(sum)

// Arrow Function With Parameters
const addTwoNumbers1 = (a, b) => {
    return a + b
}
let sum1 = addTwoNumbers1(3, 5)
console.log(sum1)

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b
let sum2 = addTwoNumbers(4, 6)
console.log(sum2)

// Implicit Returns
const saySomething = message => console.log(message)
saySomething('hello')

const sayHello = () => console.log('hello2')
sayHello()
// Returning Multiple Lines
const returnMultipleLines = () => (
    `
    <p>
    This is a multiline string
    </p>
    `
)

console.log(returnMultipleLines())

// Arrow functions challenge
let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

let subjects = [...students[0].subjects];

const update = (item, val) => [...item, val];

let updatedSubjects = update(subjects, 'Electronics');

console.log(updatedSubjects);

console.log(students[0]);
