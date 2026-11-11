async function getData(city){
    
    try{
        let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city},CZ?unitGroup=metric`;

        const response = await fetch(url);


        const data = await response.json();

        const cityname = data.resolvedAddress;
        const temp = data.currentConditions.temp;
        const conditions = data.currentConditions.conditions;

        weatherinfo.innerHTML = `
        <h2>${cityname}</h2>
        <p>${conditions}</p>
        <p>${temp}</p>

        `



    }catch(error){
        console.error(error)
        weatherinfo.innerHTML = `<p>Err: Enter different city`
    }

}


const weatherinfo = document.querySelector(".weather-info");

const btn = document.querySelector(".search-btn");

btn.addEventListener("click", function(){
    const city = document.querySelector(".city-input").value.trim();
    if (city){
        getData(city);
    }
    

});
