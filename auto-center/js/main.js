const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const linksLi = document.querySelectorAll(".links li")

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
  linksLi.forEach(li => {
    li.addEventListener("click", () => {
      links.classList.remove("show-links");
    })
  })
});
