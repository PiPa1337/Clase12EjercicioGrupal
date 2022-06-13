function Suma(num1, num2) {
    num1 = parseInt(prompt('Ingresa el primer número'));
    num2 = parseInt(prompt('Ingresa el segundo número'));
    let num3 = num1 + num2;
    document.getElementById('Resultado').innerText = 'El resultado de la suma es: ' + num3;
}
function Resta(num1, num2) {
    num1 = parseInt(prompt('Ingresa el primer número'));
    num2 = parseInt(prompt('Ingresa el segundo número'));
    let num3 = num1 - num2;
    document.getElementById('Resultado').innerText = 'El resultado de la resta es: ' + num3;
}
function Multi(num1, num2) {
    num1 = parseInt(prompt('Ingresa el primer número'));
    num2 = parseInt(prompt('Ingresa el segundo número'));
    let num3 = num1 * num2;
    document.getElementById('Resultado').innerText = 'El resultado de la multiplicación es: ' + num3;
}
function Divi(num1, num2) {
    num1 = parseInt(prompt('Ingresa el primer número'));
    num2 = parseInt(prompt('Ingresa el segundo número'));
    let num3 = num1 / num2;
    document.getElementById('Resultado').innerText = 'El resultado de la división es: ' + num3;
}