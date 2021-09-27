// Template Literals and Default Parameter Values
let favMovie = (movie = 'The Room', name = 'Tommy Wiseau') => console.log(`My name is ${name}, and my favorite movie is ${movie}.`)

favMovie('Se7en', 'Brandon');
favMovie();

// Arrow Functions
let getFirstName = ({firstName}) => {
    console.log(firstName)
};

let getFirstNameConcise = ({firstName}) => console.log(`${firstName}`);

let name = {
    firstName: 'Tommy',
    lastName: 'Wiseau'
};

getFirstName(name);
getFirstNameConcise(name);

let doMath = (x, y) => {
let exResult = x ** y
let addResult = x + y
function results () {
    console.log(`The exponent result for 7 and 5 is ${exResult} and the addition result is ${addResult}.`)
}
results()
};

doMath(7,5);


// Spread Syntax
let favorites = (name, location, favFood) => {
    console.log(name, location, favFood)
};

let arr = ['Steve', 'Birmingham', 'Couscous'];

favorites(...arr);

let myName = 'Brandon'

let nameSpreader = (name) => {
    let nameChar = [...name]
    for(i = 0; i < name.length; i++){
    console.log(nameChar[i])
    }
};

nameSpreader(myName);





