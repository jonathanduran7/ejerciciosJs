function squareSum(numbers){
      let result = numbers.reduce((acc,item)=>{
            return acc += Math.pow(item,2)
      })
      return result
}

console.log(squareSum([1,-11,1,-16,6]))