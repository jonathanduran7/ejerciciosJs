/*

let palabra = 'Jonathan Ezequiel' => 'J.E'

*/

// Solucion de otro usuario
function abbrevName(name){
    let nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }

console.log(abbrevName('Jonathan DURAN'))