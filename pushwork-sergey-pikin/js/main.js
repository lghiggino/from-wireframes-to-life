console.log("javascript is on")

const heroButton = document.querySelector("#hero button")

window.addEventListener("resize", () => {
    // console.log(`current window width is ${window.innerWidth}`);
    if(window.innerWidth <= 648){
        heroButton.classList.add("button-inverted");
    }else{
        heroButton.classList.remove("button-inverted");
    }
})