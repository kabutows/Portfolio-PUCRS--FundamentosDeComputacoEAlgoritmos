function fatorial(valor){
    if(valor == 1 || valor == 0)
        return 1
    
    return valor * fatorial(valor-1)
}

console.log(fatorial(5))