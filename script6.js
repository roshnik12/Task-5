let request = new XMLHttpRequest();
request.open('GET',"https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload = function(){
    let data = JSON.parse(this.response);
    let filtered = data.filter(item => item.currencies[0].symbol === "$"); 
    console.log(filtered);
} 