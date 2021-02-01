const key = 'dcdbcd66a97d5ddc3dcad0fee9700cf2e90f8236';

//note: callback should be in global scope

function getData(data) {
    console.log(data);
    document.querySelector('img').src = data.results[0].image.medium_url
    document.querySelector('h2').innerText = data.results[0].name
    document.querySelector('h3').innerHTML = data.results[0].description
    let otherTitles = `${data.results[1].name} | ${data.results[2].name} | ${data.results[3].name}`
    document.querySelector('h4').innerHTML = `Additional Series Titles: ${otherTitles}`
}

window.onload = runThis;

function runThis() {
    const submit = document.getElementById('submit');
    const search = document.getElementById('search');
    submit.addEventListener('click', clickThis);
}

function clickThis() {
    let ans = search.value;
    const jsonpScript = document.createElement('script');
    jsonpScript.src = "https://www.giantbomb.com/api/search/?api_key=$%7Bkey%7D&format=jsonp&json_callback=getData&query=$%7Bans%7D&resources=game%60";
    document.head.appendChild(jsonpScript);
}
