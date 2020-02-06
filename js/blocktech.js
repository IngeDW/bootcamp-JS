var x = 20;
var y = 200;
var diameter = 50;

function draw(){
  background(0);
  ellipse (x,y,diameter, diameter);
  fill(255);
  x = x + 1;
}

//how to make an object van de variables

var circle = {
  x : 0,
  y : 100,
  diameter : 50
};

function draw(){
  background(0);
  ellipse (circle.x,circle.y,circle.diameter, circle. diameter);
  fill(255);
  circle.x = circle.x + 1;
}

_____________


const ul = document.querySelector('.people');

const people = ['Inge', 'Bas', 'Robin', 'Jesper'];

let html = ``;

people.forEach(person => {
  // Create html template
  html += '<li style="color: purple"> ${person} </li>';
});

console.log(html);
ul.innerHTML = html;

_____________

// wanneer je geen argument geeft voor exponent, dan neemt hij de value 2 achter de =
function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64

_____________

function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// → 10

_____________

function sing (callback){
  console.log('la la la');
  if (callback){
  callback();
}
}

function setUp (){
  function meow(){
    console.log('meow meow');
  }
  sing(meow);
}


_____________


let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]


_____________




//NOTES

// Let en Const are local scope. Var lekt soms erbuiten.

// Functions don't need a semicolon (;) at the end, expressions do!
// Function declarations are not part of the regular top-to-bottom flow of control.
// They are conceptually moved to the top of their scope and can be used by all the code in that scope.

// A function that calls itself is called recursive.

// Function returns a value or/and a sideaffect(line).

// When inserting strings into DOM nodes, use Node.textContent (NOT: Element.innerHTML)

// Function expression (function in var):    const speak = function () {    };

// Arrow function: const calcArea = radius  => { };
//                 const calcArea = (radius, volume) => { };
//                 const calcArea = () => { };

// Methods are functions in combination with an object or datatype
//                 let resultTwo = name.toUpperCase();
//                 console.log(resultTwo);

// Callback functions: functions als parameters van een function

// Function expression: functie declaratie in een variable
//                      const square = function(x) {
//                      return x * x;
//                      };

// Higher order functions: Abstractions hide details and give us the ability to talk about problems at a higher (or more abstract) level.
// Oftwel het gaat om het versimpelen van code, maar t is niet altijd simpeler? Je hebt hiervoor meer kennis nodig en vocabulare, daarom zit je op een 'higher level'
// Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
