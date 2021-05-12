function Sumar(a ,b){
    if(a === '' && b === ''){
        const resultado = 0
        return resultado.toString()
    } else if (b === ''){
        const uno = parseInt(a)
        const dos = 0
        const resultado = uno + dos
        return resultado.toString()
    } else if ( a === '' ){
        const uno = 0
        const dos = parseInt(b)
        const resultado = uno + dos
        return resultado.toString()
    } else {
        const uno = parseInt(a)
        const dos = parseInt(b)
        const resultado = uno + dos
        return resultado.toString() 
    }
    
}



console.log(Sumar('10','2'))