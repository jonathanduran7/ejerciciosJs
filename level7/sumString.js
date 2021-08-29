function sumOfIntegersInString(s){
      return s.replace(/\D/gi,' ')
      .split(" ")
      .map(value=>Number(value))
      .reduce((a,b)=>a+b);  
}

console.log(sumOfIntegersInString('Ho2a como3 estas broooo3'));