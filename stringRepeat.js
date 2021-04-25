function repeatStr(n,s){
    let letra = '';
    for (let i = 0; i < n ; i++ ){
        letra += s
    }
    return letra
}

console.log(repeatStr(4,'hola'))