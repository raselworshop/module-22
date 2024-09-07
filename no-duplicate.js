/**
 * array has some duplicates elements
 */
const biriyanikhor = ['abul', 'babul', 'kashem', 'josim', 'abul', 'josim'];

const numbers = [23, 44, 26, 57, 67, 23, 26, 23];

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
    // console.log(array)
}

const uniqueArrayNumb = noDuplicate(numbers)
console.log(uniqueArrayNumb)
const uniqueArray = noDuplicate(biriyanikhor)
console.log(uniqueArray)