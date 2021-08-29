//my solutions
// function twoSort(s){
//       const arraySort = s.sort()
//       const data = arraySort[0].split('')
//       const result = data.join('***')
//       return result
// }


// other solution
function twoSort(s) {
      return s.sort()[0].split('').join('***');
}
const array = ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"];

console.log(twoSort(array))