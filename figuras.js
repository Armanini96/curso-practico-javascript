// Codigo del Cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado();
//console.log("El perímetro del cuadrado es: " + perímetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
areaCuadrado();
//console.log("El area de un cuadrado es:" + areaCuadrado + "cm^2");

console.groupEnd();

// Codigo del Triángulo
console.group("Triangulos");
/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
 "Los lados del triángulo miden: " 
    + ladoTriangulo1 
    + "cm," 
    + ladoTriangulo2 
    + "cm," 
    + baseTriangulo 
    + "cm."
); */

/* const alturaTriangulo = 5.5;
console.log("La altura de un triángulo es de: " + alturaTriangulo+ "cm"); */

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
perimetroTriangulo();

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 
areaTriangulo();
console.groupEnd();

// Código del Círculo
console.group("Círculos");

// Radio
/*const radioCirculo = 4;
console.log("El radio de un circulo es: " + radioCirculo + "cm"); */
// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}
diametroCirculo();
// PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");
// Circunferencia
function perimetroCirculo(radio) {
   const diametro = diametroCirculo(radio);
   return diametro * PI;
}

// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();


// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}