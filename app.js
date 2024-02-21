

/*let parrafo = document.querySelector('p');
/parrafo.innerHTML = ' Elija un numero entre 1 y 10';*/


let numeroSecreto=0; // la variable es global
let intentos=0;
let listaNumeroSorteado = [];
let numeroMaximo =10;



function asignarTextoelemento(elemento,texto){
    let elementoHtml = document.querySelector(elemento); //cualquier etiqueta html
    elementoHtml.innerHTML = texto;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if(numeroUsuario === numeroSecreto){// con el === es para que sea igual en valor y en tipo y si no es = retorna false;
        asignarTextoelemento('p',`Acertaste el numero en ${intentos} ${(intentos ===1) ?'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroUsuario < numeroSecreto) {
            asignarTextoelemento('p','El numero es mayor');
        }else{
            asignarTextoelemento('p','El numero secreto es menor');
            console.log(numeroSecreto);
        }
        intentos++; 
        limpiarCaja();
    }
   
   return;
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value= '';
    
}
function generarNumeroSecreto() {
    //si el n generado ya esta en la lista
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);

    if (listaNumeroSorteado.length == numeroMaximo) {
        asignarTextoelemento('p', 'Ya se sortearon todos los numeros posibles');
    }else {

     if (listaNumeroSorteado.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        console.log(listaNumeroSorteado);
     } else{
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;

     }
     }   
}

//creamos la funcion para generar el num secreto y que lo retorne

function condicionesIniciales() {
asignarTextoelemento('h1','Juego del numero secreto'); 
asignarTextoelemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos=1;
    
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar sms de intervalo de numero
    //generar el numero aleateorio
    // numeroSecreto = generarNumeroSecreto(); // no declaramos una nueva variable es 1 nueva llamada a la fx
    // Inicializar el numero de intentos
    condicionesIniciales();
    
    //dejar el btn de nuevo juego deshabilitado.
document.querySelector('#reiniciar').setAttribute('disabled','false');    
}

condicionesIniciales();
/*asi se llama a la funcion va con elemto y texto*/