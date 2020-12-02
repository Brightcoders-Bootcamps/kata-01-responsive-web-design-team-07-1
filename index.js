const navMenu = document.getElementById('navMenu')
const working = document.getElementById('working')
const form_control = document.getElementById('form-control')

function mostrar() {
    if(navMenu.style.display == "") {
        navMenu.style.display = "flex"
        working.style.display = "none"
    } else{
        navMenu.style.display = ""
        working.style.display = "block"
    }
}

function cortar() {
    console.log("form_control")
}