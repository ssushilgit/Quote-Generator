// const api_url = "https://api.quotable.io/random";
const api_url ="https://type.fit/api/quotes";
const quote = document.getElementById("quote");
const authorElement = document.getElementById("autthor");

async function getquote(url){
    const response =await fetch(url);
    var data = await response.json();
    console.log(data)
    // quote.innerHTML = data[2].text;
    // authorElement.innerHTML = data[2].author;
}

getquote(api_url);