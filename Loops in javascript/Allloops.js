/*while loop - It executes the block of code repeadtly untill the condition is false*/


/*Example 1*/
var x =0;
console.log(x);
while(x<=20) {
    x++;
    console.log(x + " "+ "*"+" "+"2" + " " + " " +"="+ " "+ x*2);
}
console.log('bye');


/* Example 2 */

var x =10;
while(x<20) {
    console.log(x);
    x++;
}
console.log('bye');

/* For loop - Used when number of iteration is unknown , you can do initialization , condition and incre/drcrement in same line*/

/* Example 1 */


var x = 0;
console.log('Hi');
for(var x =0;x<=50;x++)  //initialization , condition and increment
{
   console.log(x);
}
console.log("bye");


/* Do while - Same as while but executes the block of code first even if condition is false */

/* Syntax - do {
} while (condition); */



/*First it performs the operation and then checks the condition*/
var x = 1
do {
    console.log("Hi");
    x++;
}while(x<=10)
console.log("bye");



/*  Break and continue*/

//Break - It is used to exit the loop prematurely//

var i = 0;
while(i<3){
    console.log("hello",i);
    if(i%2==1){
        break;
    }
    i++;
}
console.log("Loop ends!");


/* continue-  skips and goes back to the top of the loop*/

var i = 0;
while(i<10){
    console.log("All",i);
    i++;
    if(i%2==1)
    continue;{
    }
    console.log("Even",i);
}
console.log("Loop ends!");








