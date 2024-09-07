/*//no need to do this fact bcz js already have this function 
   const Math = {
   min : function min(num1, num2){
          return num2
        }
   }
        console.log(Math.min)
 */

// to see a smallest number :
const min = Math.min(12, 46, 36, 32, 21, 9, 10, 43);
console.log(min);

// to see a heighest number :
const max = Math.max(22, 5, 565, 547,  67, 68, 79, 676, 787);
console.log(max);

// value for PI :
console.log(Math.PI)

// we can see a number isn't negative/positive, it gives positive ( -476):
console.log(Math.abs(-476));
console.log(Math.abs(230 - 476));

// Math.round will gives at least nearest values without deci:
console.log(Math.round(4.15));
console.log(Math.round(4.25));
console.log(Math.round(4.50));
console.log(Math.round(4.75));
console.log('---------------');
// floor will gives the values before point:
console.log(Math.floor(4.75));
console.log(Math.floor(4.25));
console.log('---------------');
// ceil will gives the values without deci:
console.log(Math.ceil(4.25));
console.log(Math.ceil(4.75));
console.log('--------------');
//Math.random() will gives 0-1 values with deci:
console.log(Math.random());
console.log(Math.random()* 10);

const rand = Math.round(Math.random()* 10);
console.log(rand)
