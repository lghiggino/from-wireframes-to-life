document.querySelector('#check').addEventListener('click', check)
const answerHere = document.getElementById("placeToSee")

function check() {
  const day = document.querySelector('#day').value.toLowerCase()
  if (day !== ""){
    //Conditionals go here
    if (day === "saturday"  || day === "sunday"){
      answerHere.innerText = "Its a weekend"
    } else if (day === "tuesday" || day === "thursday"){
      answerHere.innerText = "Its class day"
    } else  answerHere.innerText = "Its boring day"
  }else{
    let pickedDate = document.querySelector("#pick").value
    let picked = new Date(pickedDate.toString())
    let weekDay = picked.getDay()
    if (weekDay === 5  || weekDay === 6){
      answerHere.innerText = "Its a weekend"
    } else if (weekDay === 1 || weekDay === 3){
      answerHere.innerText = "Its class day"
    } else  answerHere.innerText = "Its boring day"
  }

}
