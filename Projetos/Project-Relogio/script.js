// 1ª Chamar os elementos que vamos manipular 
let digitalElement = document.querySelector(".digital");
let sElement = document.querySelector(".p_s");
let mElement = document.querySelector(".p_m");
let hElement = document.querySelector(".p_h");

// Processo de atualização do relógio

// Função para atualizar o relógio
function updateClock() {
    // Precisamos pegar a hora atual, new = agora
    let now = new Date();
    let hour = now.getHours(); //função que pega as horas
    let minute = now.getMinutes();
    let secund = now.getSeconds();

    //Insirir a hora no relógio digital
    // Foi criado a função fixZero para correção da falta do zero para números < 10
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(secund)}`

    //Relógio Analógico

    //ângulo dos segundos
    let sDeg= ((360 / 60) * secund) - 90;
    //ângulo dos minutos
    let mDeg= ((360 / 60) * minute) - 90;
    //ângulo dos horas
    let hDeg= ((360 / 12) * hour) - 90;

    //ângulo dos segundos 
    sElement.style.transform = `rotate(${sDeg}deg)`;
    //ângulo dos minutos
    mElement.style.transform = `rotate(${mDeg}deg)`;
    //ângulo dos horas
    hElement.style.transform = `rotate(${hDeg}deg)`;


}

// criando uma função para ajusta o zero na hora
function fixZero(time) {
    if(time < 10) {
        return '0'+time;
    } else {
        return time;
    }
}


// Necessário criar um intevalo, usamos a função setInterval()
setInterval(updateClock, 1000);
// adicionado a função para execução imediada
updateClock();