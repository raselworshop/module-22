// Feet to inch convert
// 12inch = 1feet

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
const heightMy = inchToFeet(72);
// console.log("My height is:", heightMy+" " + "feet");

// how to calculate if there is an portion number 
function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch. '
    return result;
}
const shuvoHeight = inchToFeet2(75);
// console.log("Shuvo is", shuvoHeight)

// miles to kilometer 
function mileToKilo(mile){
    const kilo = mile * 1.60934;
    // const mainInt = parseInt(kilo);
    // const remain= mile % 1.60934;
    // const remain2= remain.toFixed(2);
    // const resultt = mainInt + remain2;
    // return resultt;
    // return kilo.toFixed(2) // it's working like string
    return parseFloat(kilo.toFixed(2))
}
const convertedKilo = mileToKilo(5);
console.log(convertedKilo);
console.log(typeof convertedKilo)