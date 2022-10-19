var contador = 0

var cuestion = alert('¿ javaScript es un lenguaje de programacion ?');
var respuesta = prompt('responde si o no');
if (respuesta == 'si') {
    contador++
}else {
    contador--
}
alert('tu resultado es: ' + contador);


var cuestion = alert('¿ se puede utiliza mas de 4 h1 en una pagina ?')
var respuesta = prompt('responde si o no');
if (cuestion == 'si' ) {
    contador--
}else {

}
if (cuestion == 'no') {
    contador++
}else {

}
alert('tu resultado es: ' + contador);


var cuestion = alert('¿ se puede utilizar un h1 en el head ?');
var respuesta = prompt('responde si o no');
    
if (respuesta == 'si') {
    contador--
}else {

}
if (respuesta == 'no') {
    contador++
}else {

}

alert('tu resultado es: ' + contador);

if (contador >= 2) {
    alert('Ganaste');
}else {
    alert('Perdiste')
}


