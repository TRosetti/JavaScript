// alert(`Ola`)

function Horario(){
    var agora = new Date()
    var hora = agora.getHours()
    var min = agora.getMinutes()
    var texto = document.querySelector("#div")
    var img = document.querySelector("#img")

    if(hora < 12){
        texto.innerHTML = `<p>Bom Dia! São exatamente ${hora}:${min}</p>`
        img.src = `components/sunrise.png`
    } else if(hora < 18){
        texto.innerHTML = `<p>Boa tarde! São exatamente ${hora}:${min}</p>`
        img.src = `components/afternoom.png`
    } else if(hora < 24){
        texto.innerHTML = `<p>Boa Noite! São exatamente ${hora}:${min}</p>`
        img.src = `components/night.png`
    }

}

Horario()
