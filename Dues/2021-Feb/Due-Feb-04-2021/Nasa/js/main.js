//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=6euoRW5ywUTdFgn4d9mV98FpuE6g24PdhTwL5WuU

const button = document.querySelector("button")
const container = document.querySelector(".container")

button.addEventListener("click", () => {
    const dateInput = document.querySelector("input").value;
    let year = dateInput.slice(0,4);
    let month = dateInput.slice(5,7);
    let day = dateInput.slice(8);
    //console.log(year, month, day)

    //const startDate = document.querySelector("input").value;
    let startYear = dateInput.slice(0,4);
    let startMonth = dateInput.slice(5,7);
    let startDay = dateInput.slice(8);

    //calculating day minus four
    //let startDate = new Date(`${dateInput}T13:30:00.000Z`)
    const today = new Date(year, month-1, day)
    const finalDate = new Date(today)
    const currentDate = today.getDate()
    finalDate.setDate(currentDate - 4)

    let finalYear = finalDate.getFullYear().toString();
    let simpleMonth = finalDate.getMonth();
    let fullMonth = simpleMonth + 1;
    let finalMonth = fullMonth.toString();
    let finalDay = finalDate.getDate().toString();

    
    //FETCHING
    let APIAdress = `https://api.nasa.gov/planetary/apod?start_date=${finalYear}-${finalMonth}-${finalDay}&end_date=${startYear}-${startMonth}-${startDay}&api_key=6euoRW5ywUTdFgn4d9mV98FpuE6g24PdhTwL5WuU`

    fetch(APIAdress)
    .then(res => res.json())
    .then(data => {
        container.innerHTML = ""
        //console.log(data)

        data.forEach(element => {
            //console.log(element.url, element.media_type, element.copyright, element.explanation)
            if(element.media_type === "image"){
                console.log(element.url);
                const div = document.createElement("div");
                div.classList.add("panel");
                // div.classList.add("active")
                div.style.backgroundImage = `url("${element.url}")`;
                const h3 = document.createElement("h3");
                h3.innerText = element.copyright;
                const para = document.createElement("p");
                para.innerText = element.explanation;
                para.classList.add("explanation")
                div.appendChild(para)
                div.appendChild(h3)
                container.appendChild(div)
            } else if(element.media_type === "video"){
                const iframe = document.createElement("iframe");
                iframe.classList.add("panel");
                //iframe.classList.add("active")
                iframe.src = element.url;
                container.appendChild(iframe)
            }
        })  
        const panels = Array.from(document.querySelectorAll(".panel"))
        //console.log(panels)
        panels[panels.length-1].classList.add("active")

        panels.forEach(panel => {
            panel.addEventListener("click", () =>{
                removeActiveClasses()
                panel.classList.toggle("active")
            })
        })

        function removeActiveClasses(){
            panels.forEach(panel => {
                panel.classList.remove("active")
            })
        }
    })
    .catch(error => {
        console.log(error)
    })
})


const panels = Array.from(document.querySelectorAll(".panel"))
//console.log(panels)
        panels[panels.length-1].classList.add("active")

        panels.forEach(panel => {
            panel.addEventListener("click", () =>{
                removeActiveClasses()
                panel.classList.toggle("active")
            })
        })

        function removeActiveClasses(){
            panels.forEach(panel => {
                panel.classList.remove("active")
            })
        }

