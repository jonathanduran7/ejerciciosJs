 /* 
    - first Non consecutive:
        let array = [1,2,3,4,5,7,8,9]; results: 7
    -a zero example
        let array = [1,2,3,4,5,6,7,8,9]; results: null
    -a negative example
        let array = [-3,-1,0,1,2,3,4,5,7,8,9]; results: -1
    -all squential
    -random cases 
    

    1 = 0 + 1 = 1;
    2 = 1 + 1 = 2;
    4 = 2 + 1 = 3; error!
    5 = 3 + 1 = 4; 
*/


function firstNonConsecutive (arr) {
    let result = arr.find((val, index) => val !== index + arr[0]);

    return (Number.isInteger(result)) ? result : null;
}



const array = [0,2,4,5,6,7,8,9]


console.log(firstNonConsecutive(array))

