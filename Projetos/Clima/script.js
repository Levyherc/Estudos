// para que o formulário não envie 
// preventDefault previnr um comportamento padrão
document.querySelector(".busca").addEventListener('submit', async (e) => {
    e.preventDefault();

    // pegar o que foi digitado no campo
    let input = document.querySelector('#searchInput').value;
    
    if(input != '') {
        clearInfo();
        showWarning('Carregando...');

        // Montar URL - integração API
        // Usamos o encondeURI para que se ajuste os espaços no nome da cidade
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=e7f1144ee744f4d83e553ac2199d58b5&units=metric&lang=pt_br`

        // Fazer a consulta
        let results = await fetch(url);

        // Transformar o resultado em um objeti JS
        let json = await results.json();

        // Mostrar o resultado
        if(json.cod === 200){
            // Criada a função showInfor - Montando objeto
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg,
            })
        } else {
            clearInfo();
            showWarning('Não encontramos essa localização :(')
        }



    }

});

// Criando função para mostrar os resultados em tela 
function showInfo(json) {
    showWarning('');

    document.querySelector('.resultado').style.display = 'block';

    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>KM/H</span>`;
    
    // alterar imagem
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)

    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg)`;

}

function clearInfo() {
    showWarning('');
    document.querySelector('.resultado').style.display = 'none';
};

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg;
}

