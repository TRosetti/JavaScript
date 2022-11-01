

function contar(){
    let ini = document.querySelector("#inicio")
    let fim = document.querySelector("#fim")
    let passo = document.querySelector("#passo")
    let div = document.querySelector("div#resposta")

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert(`Você precisa colocar todos os dados!`)
    }else{
        div.innerHTML = `Contando:`

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)


        for(let c = i; c <= f; c += p ){
            div.innerHTML += ` ${c}`
        }
    }

    // Essa é uma verificação para que nenhum elemento fique sem dado
    // i.value.length >> i é a variavel , .value é o valor que está no na variavel, .length é o tamanho da variavel
    // Então (i.value.length == 0) é o tamanho do valor que está em i

}