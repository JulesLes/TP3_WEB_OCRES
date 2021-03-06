
// Fonction appelée lors du click du bouton
function start() {
var city = document.getElementById("city-input").value;
// Création de l'objet apiWeather
const apiWeather = new API_WEATHER(city);

// Si aucune ville n'est définie
if(city === ""){
  city = "paris";
}
// Appel de la fonction fetchTodayForecast
apiWeather

    .fetchThreeDaysForecast(city)
    .then(function(response) {

        console.log(response.data);
        // Récupère la donnée d'une API
        const data = response.data;

        for(i = 0; i <= 3; i++) {
            htmlElement = "today";
            if(i == 1) {
                htmlElement = "tomorrow";
            }
            else if(i == 2) {
                htmlElement = "a-tomorrow";
            }
            else if(i == 3) {
                htmlElement = "a-a-tomorrow";
            }
            // On récupère l'information principal
            const main = data.list[i].weather[0].main;
            const description = data.list[i].weather[0].description;
            const temp = data.list[i].temp.day;
            const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);

            // Modifier le DOM
            document.getElementById(htmlElement+'-forecast-main').innerHTML = main;
            document.getElementById(htmlElement+'-forecast-more-info').innerHTML = description;
            document.getElementById(htmlElement+'-icon-weather-container').innerHTML = icon;
            document.getElementById(htmlElement+'-forecast-temp').innerHTML = `${temp}°C`;
        }
    })
    .catch(function(error) {

        // Affiche une erreur
        console.error(error);
    });
}
