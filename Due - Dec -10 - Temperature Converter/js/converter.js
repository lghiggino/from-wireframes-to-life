console.log("converter is on")

const formF = document.querySelector("#farenheitForm");
const formC = document.querySelector("#celsiusForm");
const buttonConvertFtoC = document.querySelector("button#convertFtoC");
const buttonConvertCtoF = document.querySelector("button#convertCtoF")
const celsiusDisplayPara = document.querySelector("#convert-to-celsius-result")
const farenheitDisplayPara = document.querySelector("#convert-to-farenheit-result")

buttonConvertFtoC.addEventListener("click", convertFarenheitToCelsius);
buttonConvertCtoF.addEventListener("click", convertCelsiusToFarenheit);

function convertFarenheitToCelsius(event){
    event.preventDefault();
    //grab the value on the input
    let farenheitInputValue = document.querySelector("input#farenheit").value;
    //check if its a number
    farenheitInputValue = Number.parseFloat(farenheitInputValue);
    if (Number.isNaN(farenheitInputValue)){
        alert("please type a number in the input");
    } else{
        //convert
        celsius = (farenheitInputValue - 32) / 1.8;
        //display
        celsiusDisplayPara.innerText = `${celsius.toFixed(2)}`;
        //render graphic
        renderGraph(celsius.toFixed(2), "celsius");
    }
    formF.reset();
}

function convertCelsiusToFarenheit(event){
    event.preventDefault();
    //grab the value on the input
    let celsiusInputValue = document.querySelector("input#celsius").value;
    //check if its a number
    celsiusInputValue = Number.parseFloat(celsiusInputValue);
    if (Number.isNaN(celsiusInputValue)){
        alert("please type a number in the input");
    } else{
        //convert
        farenheit = (celsiusInputValue * 1.8) + 32;
        //display
        farenheitDisplayPara.innerText = `${farenheit.toFixed(2)}`;
        //render graphic
        renderGraph(farenheit.toFixed(2), "farenheit");
    }
    formC.reset();
}
    

function renderGraph(temperature, scale){
    //receive the temperature value in farenheit
    console.log("from renderGraph function:", scale)
    //receive the temperature value in celsius

    //if the temperature < 0, set div BG color blue; else red;
    //if temperature < 0, display don; else display up;
    if (scale === "celsius"){
        if(temperature > 0){
            console.log("celsius is positive");
            //mudar a altura da div, pintar de vermelho,  ou azul de acordo, apagar a outra
            document.querySelector("#positive-celsius-fill").style.height = `${temperature}px`;
            document.querySelector("#positive-celsius-fill").style.background = "red";
            document.querySelector("#negative-celsius-fill").style.height = `0px`;
        } else if (temperature < 0){
            console.log("celsius is negative");
            document.querySelector("#negative-celsius-fill").style.height = `${temperature * (-1)}px`;
            document.querySelector("#negative-celsius-fill").style.background = "blue";
            document.querySelector("#positive-celsius-fill").style.height = `${temperature}px`;
            document.querySelector("#positive-celsius-fill").style.background = "transparent";
        } else {
            console.log("celsius is zero");
            document.querySelector("#negative-celsius-fill").style.height = `0px`;
            document.querySelector("#positive-celsius-fill").style.height = `0px`;
        }
    } if (scale === "farenheit"){
        temperature = temperature/2;
        if(temperature > 32){
            console.log("farenheit is positive");
            //mudar a altura da div, pintar de vermelho,  ou azul de acordo, apagar a outra
            document.querySelector("#positive-farenheit-fill").style.height = `${temperature}px`;
            document.querySelector("#positive-farenheit-fill").style.background = "red";
            document.querySelector("#negative-farenheit-fill").style.height = `0px`;
        } else if (temperature < 32){
            console.log("farenheit is negative");
            document.querySelector("#negative-farenheit-fill").style.height = `${temperature * (-1)}px`;
            document.querySelector("#negative-farenheit-fill").style.background = "blue";
            document.querySelector("#positive-farenheit-fill").style.height = `${temperature}px`;
            document.querySelector("#positive-farenheit-fill").style.background = "transparent";
        } else {
            console.log("farenheit is zero");
            document.querySelector("#negative-farenheit-fill").style.height = `0px`;
            document.querySelector("#positive-farenheit-fill").style.height = `0px`;
        }
    }
    
}

//receive the user input number and check if its a number