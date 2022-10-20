/*

Hola, soy diego y este es mi proyecto juego de preguntas: ¿WiseOrLoser?

Mi proyecto consiste en un simulador interactivo que permite hacer preguntas a los usuarios dependiendo el tema elegido y al final una variable encargada de guardar las respuestas correctas nos dara diicho resultado. Esta es la primera version o la logica del juego, pienso despues agregar niveles de dificultad que afecten la cantidad de respuestas de las preguntas, agregar mas variedad de temas y hacerlo algo mas visual e interactivo.

*/


// Iniciamos el juego con un alerta y declarando nuestra vaeriable encargada de contar las respuestas correctas.
alert("A jugar!");
contador = 0

// Despues el simulador da a elegir un tema con una variable que muestra un prompt

let tema = prompt('Elige un tema: \n 1. HTML \n 2.CSS');

// luego creamos una condicional que decide la ruta a tomar dependiendo la eleccion del usuario, dicha ruta va de la mmano del tema elegido lo cual manda a llamar a dicho tema que esta dentro de una funcion.
if (tema == 1) {
    HTML();
}else {
    CSS();
}

// cada tema es guardado en una funcion para despues poder mostrar cada tema con sus respectivas preguntas
function HTML(params) {
// dentro de las funciones creamos las preguntas con dichas respuestas en una variable tomando los datos con un prompt
  let pregunta0 = prompt('¿Que es javascript? \n 1- un lenguaje de programacion. \n 2- un editor de codigo.');
// al responder la pregunta tenemos un condicional que verifica si la respuesta esd correcta o incorrecta, si la respuesta es correcta nuestra variable contador aumentara 1 y si no no aumnetara y nos dira la respuesta correcta en un alert
	if(pregunta0 == 1) {
    alert('respuesta correcta');
    contador++
	}else {
    alert('respuesta incorrecta \n La respuesta correcta es: 1- un lenguaje de programacion.');
	}
	let pregunta1 = prompt('¿que es HTML? \n 1- un lenguaje de estilos. \n 2- un editor de codigo. \n 3- un lenguaje de marcado de texto.');
	if(pregunta1 == 3) {
    alert('respuesta correcta');
    contador++
	}else {
    alert('respuesta incorrecta  \n La respuesta correcta es: 3- un lenguaje de marcado de texto.');
	}
	let pregunta2 = prompt('¿En cuantas partes se divide la estructura de un documento html? \n 1- 2, head y body. \n 2- 3, head, body y version del html. ');
	if(pregunta2 == 2) {
    alert('respuesta correcta');
    contador++
	}else {
    alert('respuesta incorrecta \n La respuesta correcta es: 2- 3, head, body y version del html.');
	}

	// por ultimo la variiable contador la mostramos en un alert, anunciando al jugador su puntaje de respuestas acertadas.

	if (contador >= 2) {
		alert('GANASTE! La cantidad de respuestas correctas fue: ' + contador);
	}else {
		alert('PERDISTE! La cantidad de respuestas correctas fue: ' + contador);
	}
	}
function CSS(params) {
	let pregunta0 = prompt('¿Que es javascript? \n 1- un lenguaje de programacion. \n 2- un editor de codigo.');
	if(pregunta0 == 1) {
			alert('respuesta correcta');
			contador++
	}else {
			alert('respuesta incorrecta \n La respuesta correcta es: 1- un lenguaje de programacion.');
	}
	let pregunta1 = prompt('¿que es HTML? \n 1- un lenguaje de estilos. \n 2- un editor de codigo. \n 3- un lenguaje de marcado de texto.');
	if(pregunta1 == 3) {
			alert('respuesta correcta');
			contador++
	}else {
			alert('respuesta incorrecta  \n La respuesta correcta es: 3- un lenguaje de marcado de texto.');
	}
	let pregunta2 = prompt('¿En cuantas partes se divide la estructura de un documento html? \n 1- 2, head y body. \n 2- 3, head, body y version del html. ');
	if(pregunta2 == 2) {
			alert('respuesta correcta');
			contador++
	}else {
			alert('respuesta incorrecta \n La respuesta correcta es: 2- 3, head, body y version del html.');
	}

	if (contador >= 2) {
		alert('GANASTE! La cantidad de respuestas correctas fue: ' + contador);
	}else {
		alert('PERDISTE! La cantidad de respuestas correctas fue: ' + contador);
	}
}

/*
		▄█▀─       ─▀█▄
		▀█████████████▀
		────█▄███▄█
		─────█▀█▀█
		─────▀███▀
*/
