// console.log("Hello JavaScript!")
//Write a function which count the vowel from a string.
/*function vowelOnly(){
    let str = "This is a simple string for Testsing";
    let count = 0;
    const res = str.split("");
    console.log(res);
    for(let i = 0; i < res.length; i++ ){
        if(res[i]==="a"||res[i]==="i"||res[i]==="o"||res[i]==="e"||res[i]==="u"){
            count++;
        }
        
    }
    console.log(count);
}
vowelOnly(); */

//Arrow Function Refresher

/*const myName = (name,age) => {
    console.log(`My name is ${name} and my age is: ${age} years`);
}
myName("Satish", 28);

const multiplyNum = num => num*2;
console.log(multiplyNum(45));*/

//Classes In JavaScript

class Person {
    constructor(){
        this.name = "Satish Kumar";
    }
    printMyName(){
        console.log(this.name);
    }
}
const person = new Person();
person.printMyName();