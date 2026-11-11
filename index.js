async function getData(){
    let response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Prague,CZ?unitGroup=metric");
    let text = await response.json();
    console.log(text)
    console.log(text.currentConditions.temp);
}


const weatherinfo = document.querySelector(".example");
const btn = document.querySelector(".search-btn");

btn.addEventListener("click", function(){
    console.log("ahoj")
});
getData();