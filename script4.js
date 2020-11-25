let request = new XMLHttpRequest();
request.open('GET',"https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload = function(){
    let data = JSON.parse(this.response);
    let populationSum = data.reduce((acc,item)=>acc+item.population,0);
    console.log(populationSum);
} 