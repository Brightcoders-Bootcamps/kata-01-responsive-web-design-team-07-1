const navMenu = document.getElementById('navMenu')
const working = document.getElementById('working')
const linea = document.getElementById('linea')
const linea2 = document.getElementById('linea2')
const featureNavMenu = document.getElementById('featureNavMenu')
const form_control = document.getElementById('form-control')
const form_button = document.getElementById('form-button')
const error = document.getElementById('error')
function mostrar() {
    if(navMenu.style.display == "") {
        navMenu.style.display = "flex"
        working.style.display = "none"
        linea.style.marginTop = "1600px"
        linea2.style.marginTop = "1988px"
    } else{
        navMenu.style.display = ""
        working.style.display = "block"
        linea.style.marginTop = "1585px"
        linea2.style.marginTop = "1973px"
    }
}

function cortar() {
    var text =  `https://api.shrtco.de/v2/shorten?url=${form_control.value}`;  
    const url = text
    const http = new XMLHttpRequest();
    http.open("GET", url);
    http.send();

    if(text.length === 0){
        form_control.style.border = "4px solid red"
        error.style.display = "block"
    }else if (text.length > 0 ){
        form_control.style.border="none"
        http.onreadystatechange = (e) => {  
            if(http.responseText != ""){
                var json = JSON.parse(http.responseText)
                console.log(json.result.short_link)
            }
        }
    } 
   
}
