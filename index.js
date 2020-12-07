const navMenu = document.getElementById('navMenu')
const working = document.getElementById('working')
const linea = document.getElementById('linea')
const linea2 = document.getElementById('linea2')
const featureNavMenu = document.getElementById('featureNavMenu')
const form_control = document.getElementById('form-control')
const form_button = document.getElementById('form-button')
const error = document.getElementById('error')
const links = document.getElementById('links')


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

cont = 0

function cortar() {
    var text =  `https://api.shrtco.de/v2/shorten?url=${form_control.value}`;  
    const url = text
    const http = new XMLHttpRequest();
    http.open("GET", url);
    http.send();

    if(form_control.value.length === 0){
        form_control.style.border = "4px solid red"
        error.style.display = "block"
    }else if (form_control.value.length > 0 ){
        form_control.style.border="none"
        http.onreadystatechange = (e) => {  
            
            if(http.responseText != ""){

                if(cont % 2 == 0){

                    const json = JSON.parse(http.responseText)

                    const original_link = document.createElement('p')
                    const new_link = document.createElement('a')
                    const button = document.createElement('button')

                    original_link.innerHTML = form_control.value
                    new_link.innerHTML = json.result.short_link
                    button.innerHTML = "Copy"

                    new_link.href = "http://" + json.result.short_link
    
                    button.className = "button-input"
                    //button.id = "b" + cont

                    
                    button.onclick = function copiar() {
                        console.log("HOLA")
                        //const new_link_2 = document.getElementById("nl" + cont)
                        const text_area = document.createElement('textarea')
                        document.body.appendChild(text_area)
                        text_area.value = new_link.innerHTML
                        text_area.select()
                        console.log(text_area.value)
                        document.execCommand("copy")
                        document.body.removeChild(text_area)
                    }

                    links.appendChild(original_link)
                    links.appendChild(new_link)
                    links.appendChild(button)


                    
                    console.log(json.result.short_link)
                }
                cont++
            }
        }
    } 
   
}
