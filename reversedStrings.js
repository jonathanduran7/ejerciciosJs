function solution(cadena){
    let x = cadena.length;
    let cadenaInvertida = "";
    
    while (x>=0){
      cadenaInvertida = cadenaInvertida + cadena.charAt(x);
      x--;
    }
    return cadenaInvertida;
  }
  
  console.log(solution('Hola'))