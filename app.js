const caracteresPermitidos = 50;
const total = document.querySelector('.total').textContent =caracteresPermitidos;
//En contenidoTextarea vamos a almacenar el string completo del textarea. 
let contenidoTextarea = '';

eventListeners();
function eventListeners() {
    document.forms[0].textarea.addEventListener('input', maxCaracteres);
}

function maxCaracteres(event) {
   // el .textarea es el name del text area. con el name accedemos a un campo el formulario
    const numCaracteres = document.forms[0].textarea.value.length;
    
    if(numCaracteres > caracteresPermitidos) {
        document.forms[0].textarea.value = contenidoTextarea;
        document.querySelector('.contador').classList.add('red');
    }else {
        contenidoTextarea = document.forms[0].textarea.value;
        document.querySelector('.contador').classList.remove('red');
        contarCaracteres(numCaracteres)
    }
}

//contarCaracteres(num_caracteres);
function contarCaracteres(total) {
    document.querySelector('.counter').textContent = total;
}