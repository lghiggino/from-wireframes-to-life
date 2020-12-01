console.log("javascript main is connected")

let sites = [
    {id: "base",
    link: "https://www.alphalogicinc.com/blog/sketch-vs-wireframe-vs-mockup-vs-prototype/ target='blank' ",
    img: "./assets-base/procesimage.jpg",
    span: "This is the process",
    para: "From wireframes and site mockups I challenge myself to buld complete and functional websites",
    stack: "HTML and CSS",
    },
    {id: "cuisine-restaurant",
    link: "./cuisine-restaurant/index.html",
    img: "./assets-base/cuisine-restaurant.jpg",
    span: "Restaurant site",
    para: "Building a basic site for a restaurant, functionalities are a WIP",
    stack: "HTML and CSS",
    },
    {id: "hair-salon",
    link: "./hair-salon/index.html",
    img: "./assets-base/hair-salon.jpg",
    span: "Hair Salon basics",
    para: "This is an example of a basic hair salon website",
    stack: "HTML and CSS",
    },
    {id: "schneider",
    link: "./pushwork-max-schneider/index.html",
    img: "./assets-base/schneider.jpg",
    span: "Basic corporate site",
    para: "This site has a big hero image, and four cards for features",
    stack: "HTML and CSS",
    },
    {id: "level-ground",
    link: "./level-ground/level-ground.html",
    img: "./assets-base/level-ground.jpg",
    span:"Level Ground MMA",
    para: "Done using floats and cleared containers",
    stack:"HTML and CSS",
    },
    {id: "pikin",
    link: "./pushwork-sergey-pikin/index.html",
    img: "",
    span: "Corporate landing page",
    para: "Huge landing page with sections, cards, and other components",
    stack: "HTML and CSS",
    },
    {id: "khan-academy",
    link: "./khan-academy/khan.html",
    img: "./assets-base/khan.jpg",  
    span: "Khan Academy",
    para: "A redo of Khan Academy using floats and MQs",
    stack: "HTML and CSS",
    },
    {id: "tech-crunch",
    link: "./tech-crunch/tc.html",
    img: "./assets-base/tech-crunch.jpg",
    span:"Tech Crunch wanabe",
    para: "This is the redo of Tech Crunch",
    stack:"HTML and CSS",
    },
    {id: "BBC",
    link: "./bbc/bbc.html",
    img: "./assets-base/bbc.jpg",
    span: "This is the BBC",
    para: "Redo of the BBC website using only floats",
    stack: "HTML and CSS",
    },
]



function renderSites(sitesArray){
    const display = document.getElementById("main-display");
    let html = ""
    sitesArray.forEach (site => {
        html += ` 
        <section class="card" id=${site.id}>
            <a href=${site.link}>
            <img src=${site.img} alt=${site.span}>
            <span>${site.span}</span>
            </a>
            <p>${site.para}</p>
            <p>${site.stack}</p>
        </section>`
    })
    display.innerHTML = html;
}

renderSites(sites);
