var idade = 17
console.log(idade)

if(idade < 16){
    console.log('Nao vota')
} else {
    if(idade >= 16 && idade < 18 || idade > 65){
        console.log(`Voto opcional`)
    }else if(idade > 18){
        console.log('Voto obrigatório')
        
    }
} 