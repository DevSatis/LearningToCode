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

/*
class Person {
    constructor(){
        this.name = "Satish Kumar";
    }
    printMyName(){
        console.log(this.name);
    }
}
const person = new Person();
person.printMyName(); */


//Spread and Rest Operators

//Spread
/*const numbers = [1, 2, 3, 4];
const newNumbers = [...numbers, 5, 6, 7, 8, 9, 10]
console.log(numbers, newNumbers)

const Person = {
    name: "Satish Kumar",
    age: 28,
    Village: "Garopur",
    Hobby: "JavaScript"
}
const NewPerson = {
    ...Person,
    friend: "Vanshu",
    city: "Kanpur"
}
console.log(Person, NewPerson)
console.log(NewPerson.friend)
*/

//Rest Operator
/*
const myName = (...agrs) => {
    return agrs.filter(el => el ===1);
}
console.log(myName(1, 2,3));
*/
//Destructuring

const numbers = [11, 12, 13, 14]
const [num1,  num2, num3, num4] = numbers;
console.log(num2, num1);


