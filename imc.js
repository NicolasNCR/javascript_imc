function calcula_imc(){
    altura = document.imcform.altura.value
    peso = document.imcform.peso.value
    imc = (peso/(altura*altura))

    if (imc<18.5){
        alert("Você está Abaixo do Peso! Índice:" + imc)
    }

    if (imc>=18.5 && imc<=24.99){
        alert("Você está com o Peso Ideal! Índice:" + imc)
    }

    if (imc>=25 && imc<=29.99){
        alert("Você está com Sobrepeso! Índice:" + imc)
    }

    if (imc>=30 && imc<=39.99){
        alert("Você está com Obesidade! Índice:" + imc)
    }

    if (imc>=40){
        alert("Você está com Obesidade Mórbida! Índice:" + imc)
    }

}