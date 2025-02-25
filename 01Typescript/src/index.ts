// in c++ int x = 1
//  let x: number  = 1; // type inferencing
// console.log(x);

// ****************************************** \\

/*
Thing to learn -> How to give types to arguments of a function
Write a function that greets a user given their first name. 
Argument - firstName
Logs - Hello {firstName}
Doesn’t return anything
 */
 
/*
function greet(firstName: string) {
    console.log(`Hello ${firstName}`);
    console.log("Hello" + firstName);
}
greet("Amit");
*/

// ****************************************** \\

/*
Thing to learn -> How to assign a return type to a function
Write a function that calculates the sum of two functions
*/

/*
    return type of sum function is number
function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(99, 1));
*/

// ****************************************** \\

/*
Return true or false based on if a user is 18+💡
Thing to learn - Type inference
*/

/*
function isLegal( age: number ) {
    if( age >= 18 ) return true
    else return false
}
console.log(isLegal(17));
*/

// ****************************************** \\

/*
Create a function that takes another function as input, and runs it after 1 second.
*/

/*
fn: () => void → This means fn is a function with no arguments that returns void.

    function runAfter1Second( fn: () => void ) {
        setTimeout(fn, 1000);
    } 

    runAfter1Second(() => {
        console.log("Hello after 1 second");
    })

*/

// ****************************************** \\

/*
// defined object as an argument
function greet( user: {
    name: string,
    age: number
} ) {
    console.log("hello", user.name);
}

let user = {
    name: "Amit",
    age: 21
}

greet(user);

*/


// ****************************************** \\

// let user: {
//     firstName: string,
//     age: number
// }  = {
//     firstName: "Amit",
//     age: 21
// }

interface UserType {
    firstName: string,
    age: number,
    lastName: string
}

function greet( user: UserType ) {
    console.log("hello", user.firstName);
}

let user: UserType = {
    firstName: "Amit",  
    age: 21,
    lastName: "Kumar"
}






// ****************************************** \\


















