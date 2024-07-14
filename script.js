const key="ab5bb977608dc6f42d2b8464cb730cfc";
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const icon=document.querySelector(".weathericon");

async function checkWeather(city){
    const response=await fetch(url+city+`&appid=${key}`);
    var data=await response.json();
    
    if(response.status==404){
        document.querySelector(".error").style.display="block";
    }
    else
    {
        document.querySelector(".error").style.display="none";
        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+" %";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
        
        let weather=data.weather[0].main;
        
        if(weather=="Clouds"){
            icon.src="images/clouds.png";
        }
        else if(weather=="Clear"){
            icon.src="images/clear.png";
        }
        else if(weather=="Rain"){
            icon.src="images/rain.png";
        }
        else if(weather=="Drizzle"){
            icon.src="images/drizzle.png";
        }
        else if(weather=="Mist"){
            icon.src="images/mist.png";
        }
        else if(weather=="Snow"){
            icon.src="images/snow.png";
        }
        
        document.querySelector(".weather").style.display="block";
    
    }

   }

searchbtn.addEventListener("click",()=>{
    checkWeather(search.value);
});

search.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault(); 
        checkWeather(search.value);
    }
});