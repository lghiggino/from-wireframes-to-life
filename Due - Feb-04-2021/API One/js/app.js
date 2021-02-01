// const Http = new XMLHttpRequest();
const urlBase = 'https://api.currentsapi.services/v1/latest-news?' + 'apiKey=HFTqO4_tupRBRGcghvzlQ4Vig_5GDFryi6cdgEYJpZ4-H0NZ';
const urlSearch = 'https://api.currentsapi.services/v1/search?' + 'keywords=weather&language=en&' + 'apiKey=HFTqO4_tupRBRGcghvzlQ4Vig_5GDFryi6cdgEYJpZ4-H0NZ';
const main = document.querySelector("#main")

document.addEventListener("DOMContentLoaded", fetchBase())

function fetchBase(){
    fetch(urlBase)
        .then(res => res.json())
        .then(data =>  {
            //console.log(data)
            renderData(data)
        })
        .catch(err => console.log(err))
}

function renderData(data){
    console.log(data.news)
    main.innerHTML = ""
    data.news.forEach(element => {
        main.innerHTML += `
        <article class="thumb">
            <a href="${element.url}" class="image" target="blank"><img src="${element.image}" alt="" /></a>
            <div class="overlay">
                <h2>${element.title}</h2>
                <h4>by ${element.author} </h4>
                <p>${element.description}</p>
            </div>
        </article>
        `
    })
}

// fetch(url2)
//     .then(res => res.json())
//     .then(data =>  console.log(data))
//     .catch(err => console.log(err))




/*{"status":"ok",
"news":[
    {
        "id":"ba7b4ebb-9203-4eee-b857-a7a7ae5b55f3",
        "title":"Fantasy hockey: Forecaster for the week of February 1-7",
        "description":"Your essential guide to setting fantasy hockey lineups that take full advantage of every NHL team's strength of schedule.",
        "url":"https:\/\/www.espn.com\/fantasy\/hockey\/story\/_\/id\/30800492\/forecaster-week-february-1-7",
        "author":"Sean Allen",
        "image":"https:\/\/a4.espncdn.com\/combiner\/i?img=%2Fphoto%2F2021%2F0129%2Fr807992_1296x729_16%2D9.jpg",
        "language":"en",
        "category":["sports"],
        "published":"2021-01-31 17:46:02 +0000"
    },
 */

 //OLD METHOD
 // Http.open("GET", url);
// Http.send("json");

// Http.onreadystatechange = (e) => {
//     if (Http.status = 200){
//         let data = Http.responseText
//         render(data)
//     } else throw new Error ("data was unavailable at the moment")
//     //console.log(Http.responseText)
    
// }

// function render(data){
//     // console.log("from render")
//     let dataString = data.slice(data.indexOf("["))
//     let dataArray = dataString.split("{")
//     //console.log(dataArray)
//     let elementsArray = dataArray.map(element => {
//         console.log(element)
//     })
//     // console.log(elementsArray)
// }