const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
    const api_key = '3f7ac641027ca142d960fdbef5d4a581';
    async function getWeatherDetails()
    {
        const cityName = searchBox.value;
        const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${api_key}`;
        try{
            const response = await fetch(api_url);
            if(response.status == 404)
                {
                    document.querySelector(".error").style.display ="block";
                    document.querySelector(".weather").style.display ="none";
                }
            else
            {
                const data =await response.json();
                console.log(data);
                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                document.querySelector(".humidity").innerHTML = data.main.humidity+ "%";
                document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";
    
                if(data.weather[0].main == "Clouds")
                    {
                        weatherIcon.src= "weather-app-img/images/clouds.png";
                    }
                else if(data.weather[0].main == "Clear")
                    {
                        weatherIcon.src= "weather-app-img/images/clear.png";
                    }
                else if(data.weather[0].main == "Rain")
                    {
                        weatherIcon.src= "weather-app-img/images/rain.png";
                    }
                    else if(data.weather[0].main == "Drizzle")
                        {
                            weatherIcon.src= "weather-app-img/images/drizzle.png";
                        }  
                    else if(data.weather[0].main == "Mist")
                        {
                            weatherIcon.src= "weather-app-img/images/mist.png";
                        }   
                        else if(data.weather[0].main == "Snow")
                            {
                                weatherIcon.src= "weather-app-img/images/snow.png";
                            }   
                document.querySelector(".weather").style.display = "block";
                document.querySelector(".error").style.display = "none";
            }
            
        }
        catch(error)
        {
            console.log(error);
        }
    }
    searchBtn.addEventListener("click",getWeatherDetails);
    