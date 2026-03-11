// && and
// || or

const expresion1 = 5 > 10;
console.log('Expresion1',expresion1);

const expresion2 = 3 < 10;
console.log('Expresion2',expresion2);

const expresion3 = 2 == 2;
console.log('Expresion3',expresion3);

const expresion4 = 3 != 3;
console.log('Expresion4',expresion4);

// TRUE && TRUE
console.log('TRUE&&TRUE', expresion2 && expresion3);

// FALSE && TRUE 
console.log('FALSE&&TRUE', expresion1 && expresion3);

// TRUE && FALSE
console.log('TRUE&&FALSE', expresion3 && expresion1);

// FALSE && FALSE
console.log('FALSE&&FALSE', expresion2 || expresion3);

// TRUE || TRUE
console.log('TRUE||TRUE', expresion2 || expresion3);

// FALSE|| TRUE
console.log('FALSE||TRUE', expresion1 || expresion3);

// TRUE || FALSE
console.log('TRUE||FALSE', expresion3 || expresion1);

// FALSE || FALSE
console.log('FALSE||FALSE', expresion1 || expresion4);
