//Convention and Rules

// let js = 'Amazing';
// console.log( 40 + 30 + 30 -10);

// console.log('EKENE');
// console.log(49);

// let firstName = 'Ekene';
// console.log(firstName);

// let Ekene_Babe ="EB";
// let $function = "27"

// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// let job1 ="programmer";
// let job2 = "teacher";

// console.log(myFirstJob, myCurrentJob);


// let JavascriptIsFun = true;
// console.log(JavascriptIsFun);

// // console.log(typeof true); 
// console.log(typeof JavascriptIsFun);  //boolean
// // console.log(typeof 43); 
// // console.log(typeof 'Ekene'); 

// JavascriptIsFun ='YES!!!';
// console.log(typeof JavascriptIsFun); //string


// //Undefined Data Type
// let year;
// console.log(year)
// console.log(typeof year); 

// year = 2004;
// console.log(typeof year); //number
// console.log(typeof null); //object



// //Functions Data Type
// let age = Number(prompt("What is your age?"));
// console.log(Number(age));

// console.log(typeof Number); 


// //Math Operators
// const now = 2030;
// const ageEkene = now - 2004;
// const ageSharon = now - 2003;
// console.log(ageEkene); //number
// console.log(ageSharon);

// console.log(ageEkene * 2, ageEkene / 2, 2 ** 3); //Exponentiation operator
// // 2 ** 3 = 2 * 2 * 2 = 8 means 2 raised to the power of 3

// const firstName ='Ekene';
// const lastName = 'Ijeh';
// console.log(firstName + ' ' + lastName); //string concatenation

// //Assignment Operators
// let x = 10 + 5; //15
// x += 10;
// x *= 4; //100
// x++; //101
// x--; //100
// x--; //99
// console.log(x); //15

// //Comparison Operators
// console.log(ageEkene > ageSharon); //true
// console.log(ageSharon >= 18); //true

// const isFullAge = ageSharon >= 18; //true

// console.log(now - 2004 > now - 2003);

// const now = 2030;
// const ageEkene = now - 1991;
// const ageSharon = now - 2020;

// console.log(now - 2004 > now - 2020);

// console.log(25 - 10 - 5); //10 left to right

// let x,y; //undefined
// x = y = 25 - 10 - 5; //x = y = 10
// console.log(x, y); 

// const averageAge = (ageEkene + ageSharon) / 2; //average age of Ekene and Sharon
// console.log(ageEkene, ageSharon, averageAge); //average age of Ekene and Sharon

// const massMark = 78; //kg
// const heightMark = 1.69; //m
// const massJohn = 92; //kg
// const heightJohn = 1.95; //m

const massMark = 95; //kg
const heightMark = 1.88; //m
const massJohn = 85; //kg
const heightJohn = 1.76; //m

const BMIMark = massMark / heightMark ** 2; //BMI of Mark
const BMIJohn = massJohn / heightJohn ** 2; //BMI of John
const markHigherBMI = BMIMark > BMIJohn; //true or false

console.log(BMIMark, BMIJohn, markHigherBMI); //BMI of Mark and John