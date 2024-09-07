let a = 5;
let b = 7;
console.log(a, b);
// if we want to make it a = 7 and b = 5 then let's try
// a = b;
// b = a;
// console.log(a, b)
// it gives us a invalid answer, let's try anothe step to be right;
const temp = a;//we put the value of a in the temp
a = b;
b = temp; // we return the value of temp to b;
console.log(a, b);
console.log('--------------------------------------')

//we can use simple distructuring method is:
let x = 5;
let y = 7;
console.log(x, y);
[x, y]=[y, x];
console.log(x, y)