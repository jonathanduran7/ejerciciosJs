const removeString = (string) =>{
      let cadena = string.split(' ');
      let result = cadena.reduce((acc,item)=>{
            return acc += item;
      })
      return result;
}

//solution kata
function noSpace(x){return x.split(' ').join('')}

// console.log(removeString("HOla como estas 3 ds s asdfd 8989 asfsd"));
console.log(noSpace('HOla como estas'))