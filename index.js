//access to html elements
var w_search_bar=document.querySelector('.search-bar');//searchbar
var w_search_button=document.querySelector('.search button');//searchbutton
var w_city=document.querySelector('.city');//search city
var w_temperature=document.querySelector('.temperature');//temperatur
var w_description=document.querySelector('.description');//description
var w_humidity=document.querySelector('.humidity');//humidity
var w_wind=document.querySelector('.wind');//wind
var w_icon=document.querySelector('.icon');//wind

const apiKey='88f6e6f592a5a4e9421c8b49c7a8b40f';

function fetchWeather(city)
{
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(api)
    .then(response=> response.json())
    .then(data =>displayWeather(data));
}
function displayWeather(data){
    const{name}=data;
    const{icon, description}=data.weather[0];
    const{temp, humidity}=data.main; 
    const{speed}=data.wind;

    w_city.innerText="Weather in "+name;
    w_temperature.innerText=Math.floor(temp-273.15)+"℃";
    w_icon.src=`http://openweathermap.org/img/wn/${icon}.png`;
    w_description.innerText="Humidity: "+humidity+"%";
    w_wind.innerText="Wind: "+speed+"km/h";
    document.querySelector(".weather").classList.remove('loading');
}
w_search_bar.addEventListener('keyup',function (event) {
    if(event.key=="Enter")
    {
        searchWeather();
    }
  });
  w_search_button.addEventListener('click',searchWeather);
  function searchWeather()
  {
      fetchWeather(w_search_bar.value);
  }
fetchWeather('kohat');