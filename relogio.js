setInterval (
function atualizar(){
    var relogio = new Date()
    var horas = relogio.getHours()
    var minutos = relogio.getMinutes()
    var segundos = relogio.getSeconds()
    document.getElementById('horas').innerText = horas + " HORAS"
    document.getElementById('minutos').innerText = minutos + " MINUTOS"
    document.getElementById('segundos').innerText = segundos + " SEGUNDOS"
}, 1000)
