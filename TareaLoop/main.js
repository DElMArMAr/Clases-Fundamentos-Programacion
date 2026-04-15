const number = 364;
let sum = 0;
let n = number;

while (n > 0) {
  sum = sum + (n % 10);     
  n = (n - (n % 10)) / 10;   
}

console.log(`La suma de los dígitos del número ${number} es ${sum}`);


// Profe no pude hacer el segundo ejercicio :(