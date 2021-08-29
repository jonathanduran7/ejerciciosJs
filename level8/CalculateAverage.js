// Calcular la media luego de recibir un array de numeros

function find_average(numbers){
    let resultado = 0;

    for (let i = 0; i < numbers.length; i++){
        resultado += numbers[i]
    }
    return  resultado / numeros.length;
}

let numeros = [5,25,10,5]

console.log(find_average(numeros));