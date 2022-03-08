function atualizarTempo(){
// Pegando a hora
var display = document.querySelector('.display');
var agora = new Date();
var hora = correcaoHora(agora.getHours()) + ':' + correcaoHora(agora.getMinutes()) + ':' + correcaoHora(agora.getSeconds());

display.textContent = hora;
}

function correcaoHora(numero){
    if(numero < 10){
        numero = '0' + numero;
    }
    return numero;
}

atualizarTempo();
setInterval(atualizarTempo, 1000);
console.log(hora);
