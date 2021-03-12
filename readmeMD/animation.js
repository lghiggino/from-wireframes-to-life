console.log("animation js is on")

const animatedTop = document.querySelector('.top-container');
const animatedBottom = document.querySelector(".bottom-container")
const textTop = document.querySelector('.top-container p');
const textBottom = document.querySelector(".bottom-container p")

let iterationCount = 0;

animatedTop.addEventListener('animationiteration', () => {
  
  textTop.innerText = innerTexts[iterationCount]
  textBottom.innerText = innerTexts[iterationCount]
  iterationCount++;
  if(iterationCount > innerTexts.length-1){ iterationCount = 0}
  console.log(`Animation iteration count: ${iterationCount}`);
});

const innerTexts = [
    "",
    "Hi There! My name is Leonardo!",
    "",
    "I'm a software engineer",
    "",
    "Currently focused on: ReactJS and NextJS",
    "",
    "I also have experience with: NodeJS and ExpressJS",
]

/* I'm a software engineer currently focused on ReactJS and NextJS with Javascript.  
I also have experience with back-end skills with NodeJS and expressJS

I develop web projects geared towards education, 
data transparency and open-data,  and web-scraping.  
They all share a strong emphasis on elegant design, 
usability and accessibility, 
always aimed at providing meaningful experiences to users.*/
