//Calculadora de IMC
//Peso en KG / Estatura en m2

let pesoUsuario
let esturaUsuario
let imcUsuario
let salir
do {
pesoUsuario = parseFloat (prompt ("¿Cual es tu peso en KG?"));
estaturaUsuario = parseFloat ( prompt ("¿Cual es tu estatura en metros cuadrados?"));
imcUsuario = pesoUsuario / (estaturaUsuario * estaturaUsuario);
alert ("Tu IMC es "+imcUsuario);
 if (imcUsuario < 18.5) {
     alert ("Tu peso es delgado, deberás subir de peso.");
     
 }

 else if ((imcUsuario >= 18.5)  && (imcUsuario <= 24.99) ) {
    alert ("Tu peso es normal, mantente así.");
 }
 else if ((imcUsuario >= 25) && (imcUsuario < 30)) {
    alert ("Estás en sobrepeso, deberás bajar de peso.");
 }
 else if (imcUsuario >= 30) {
    alert ("Estás en estado de obesidad, debes bajar de peso urgente.");
 }
salir = prompt ("Si deseas calcular otro IMC usa s, si deseas salir usa n");
} while (salir != "n")