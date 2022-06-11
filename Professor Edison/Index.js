console.log("Hello World!!")

function integrador(limiteSuperior){
    for(let i = 0; i < limiteSuperior; i++){
        if(i%2==0){
            console.log(i+": é par")
        }else{
            console.log(i+": é impar")
        }
    }
}

integrador(20)