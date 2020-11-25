let request = new XMLHttpRequest();
request.open('GET',"https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload = function(){
    let data = JSON.parse(this.response);
    try {
        if (data.length == 250) {
            throw new SyntaxError('data length not valid')
        }
    }
    catch (error) {
        alert(error.message)
    }
}