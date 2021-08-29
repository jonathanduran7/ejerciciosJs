function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; }); //Ordena de menor a mayor
    // numbers = numbers.sort() Lo orderna al revez
    return numbers[0] + numbers[1];
  };

let array = [4,8,9,2,10]

console.log(sumTwoSmallestNumbers(array))