/* 
Escriba un programa que calcule el precio del tiquete de entrada a un museo
El precio de los tiquetes sigues las siguientes reglas:
    1. El precio base sin descuento es de 5000
    2. Niños menores de 12 años entran gratis
    3. Personas mayores de 65 años tienen un 40% de descuento
    4. Personas con un id de estudiantes tienen un 25% de descuento, sin importar la edad
    5. Personas con cupón de descuento, se les puede aplicar el descuento descrito en el cupón.
    6. Solo un descuento se aplica a cada tiquete, el más alto, por lo tanto, para una persona 
    con id de estudiante y con un cupón de 30% de descuento, solo aplicará uno de los dos descuentos.
*/


const age = 30;
const hasCoupon = true;
const couponDiscount = 25;
const hasStudentId = false;

const precioBase = 5000;
let descuento = 0;
let price;

if (age < 12) {
    price = 0;
} else {


    if (age > 65) {
        descuento = 40;
    }

   
    if (hasStudentId) {
        if (25 > descuento) {
            descuento = 25;
        }
    }


    if (hasCoupon) {
        if (couponDiscount > descuento) {
            descuento = couponDiscount;
        }
    }

    // Calcular precio final
    price = precioBase - (precioBase * descuento / 100);
}

console.log('El precio de su tiquete es:', price);