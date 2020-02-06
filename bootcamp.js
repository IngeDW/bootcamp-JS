// objects
var person = {
  naam: 'Inge',
  age: 22,
  hobby: {
      tuinieren : 'grasmaaien'
  }
}

console.log(person.age);
console.log(person.age.tuinieren);

person.hobby.tuinieren = 'water'


//methods (functie gedeclareerd in een object, dus onderdeel van iets anders)
console.log(person.age);
//console is het object, log is de method
console.log(person.name.length);
// .length is een method

// function expression = functie in een variable

// scope
var global = "hoogste niveau scope, bovenaan je js, hier kan je altijd bij en overal aanroepen";
