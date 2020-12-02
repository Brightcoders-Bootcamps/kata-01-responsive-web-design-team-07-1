const navMenu = document.getElementById('navMenu')
const working = document.getElementById('working')
const form_control = document.getElementById('form-control')
const linea = document.getElementById('linea')
const linea2 = document.getElementById('linea2')

function mostrar() {
    if(navMenu.style.display == "") {
        navMenu.style.display = "flex"
        working.style.display = "none"
        linea.style.marginTop = "1665px"
        linea2.style.marginTop = "2053px"
    } else{
        navMenu.style.display = ""
        working.style.display = "block"
        linea.style.marginTop = "1574px"
        linea2.style.marginTop = "1962px"
    }
}

function cortar() {
    console.log("form_control")
}