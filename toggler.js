const darkmodeToggler = document.querySelector("#darkmode-container")
const body = document.querySelector("body")



darkmodeToggler.addEventListener("click",(event) => {
    darkmodeToggler.classList.toggle("oscuro")
    body.classList.toggle("oscuro-body")
})