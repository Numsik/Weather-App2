async function getData(city){
    
    try{
        const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Prague,CZ?unitGroup=metric";

        const response = await fetch(url);

        const data = await response.json();

        const cityname = data.resolvedAddress;
        consttemp = data.currentConditions.temp;
        const conditions = data.currentConditions.conditions;

        weatherinfo.innerHTML = `
        <h2>${cityname}</h2>
        <p>${conditions}</p>
        `



    }catch(error){
        weatherinfo.innerHTML = `<p>Err: Enter different city`
    }

}


const weatherinfo = document.querySelector(".example");
const btn = document.querySelector(".search-btn");

btn.addEventListener("click", function(){
    const city = document.querySelector(".city-input").value.trim();
    if (city){
        getData(city);
    }
    

});
