// genaral logic
// Conuting leap year need to be divisible by 4
function leapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false
    }
}
const lipiYear = leapYear(2076)
console.log(lipiYear)
console.log('----------------------')

/* Logic part: those years doesn't divisible by 100, and if the year is divisible 
   by 4, then it will be a leap year.
   if it divisible by 400 then it will be leap year.
   else it isn't a leap year/false

*/

function isLeapYear(years){
    if(years % 100 !== 0 && years % 4 === 0){
        return true;
    }else if( years % 100 === 0 && years % 400 === 0){
        return true;
    }else{
        return false;
    }
}
let number = isLeapYear(1900)
console.log(number)