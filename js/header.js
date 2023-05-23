//
let miHeader = `
<div class="headerRonnie" id="headerRonnie">

            <div class="cartel" id="cartel">
                <iframe src="img/img-PV-Restaurants-Munchies.png" frameborder="0" width="100%" height="100%"></iframe>

            </div>
            <nav>
                <a class="aheader" href="index.html">Inicio</a>
                <a class="aheader" href="#nosotros">Nosotros</a>
                <a class="aheader" href="menu.html">Menú</a>
                <a class="aheader" href="contact.html">Contacto</a>
            </nav>
        </div>
document.querySelector("header").innerHTML=miHeader;
`
const APP_ID = 'd9bd77e2f9d7e78a056c50c116cbcf06';

const fetchData = position => {
    const { latitude, longitude } = position.coords;
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APP_ID}`)
        .then(response => response.json())
        .then(data => setWeatherData(data));
}

const setWeatherData = data => {
    const weatherData = {
        location: data.name,
        description: data.weather[0].main,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: Math.floor(data.main.temp),
        date: getDate(),
    }

    Object.keys(weatherData).forEach(key => {
        setTextContent(key, weatherData[key]);
    });

    cleanUp();
}

const cleanUp = () => {
    let container = document.getElementById('container');
    let loader = document.getElementById('loader');

    loader.style.display = 'none';
    container.style.display = 'flex';
}

const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;
}

const setTextContent = (element, text) => {
    document.getElementById(element).textContent = text;
}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData)
}