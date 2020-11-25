let request = new XMLHttpRequest();
request.open('GET',"https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload = function(){
    let data = JSON.parse(this.response);
    console.log(data);
    let filtered = data.filter(item => item.population < 200000);
    console.log(filtered);
} 