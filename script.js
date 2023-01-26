function atualizarTempo() {
  var display = document.querySelector(".display");

  var agora = new Date();

  var horario =
    corrigirHorario(agora.getHours()) +
    ":" +
    corrigirHorario(agora.getMinutes()) +
    ":" +
    corrigirHorario(agora.getSeconds());

  display.textContent = horario; /*esta div recebe o conteudo horário*/
}

function corrigirHorario(numero) {
  if (numero < 10) {
    numero = "0" + numero; /*coloca o zero no numero*/
  }
  return numero;
}

atualizarTempo();
/*setInterval = função do js que atualiza de 1 em 1 segundo*/
setInterval(atualizarTempo, 1000);

console.log(horario);
