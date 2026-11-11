async function getData(){
    let response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Prague,CZ?unitGroup=metric");
    let text = await response.json();
    console.log(text)
    console.log(text.currentConditions.temp);
}
getData();