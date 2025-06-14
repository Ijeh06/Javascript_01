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


/// Operator Precedence
// const massMark = 78; //kg
// const heightMark = 1.69; //m
// const massJohn = 92; //kg
// const heightJohn = 1.95; //m

// const massMark = 95; //kg
// const heightMark = 1.88; //m
// const massJohn = 85; //kg
// const heightJohn = 1.76; //m

// const BMIMark = massMark / heightMark ** 2; //BMI of Mark
// const BMIJohn = massJohn / heightJohn ** 2; //BMI of John
// const markHigherBMI = BMIMark > BMIJohn; //true or false

// console.log(BMIMark, BMIJohn, markHigherBMI); //BMI of Mark and John

// const massEkene = 70; //kg
// const heightEkene = 1.75; //m
// const massTobi = 85; //kg
// const heightTobi = 1.76; //m

// const BMIEkene = massEkene / heightEkene ** 2; //BMI of Ekene
// const BMITobi = massTobi / heightTobi ** 2; //BMI of Tobi
// const ekeneHigherBMI = BMIEkene > BMITobi; //true or false

// console.log(BMIEkene, BMITobi); //BMI of Ekene and Tobi

// //Template Literals
// const firstName = 'Ekene';
// const job = 'Programmer';
// const birthYear = 2004;
// const year = 2025;

// const ekene = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

// console.log(ekene); //string concatenation

// const Ekenenew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(Ekenenew); //template literal

// console.log(`Just a regular string...`); //template literal
// console.log('String with \n\
// multiple \n\
// lines'); //string with multiple lines

// console.log(`String
// multiple
// lines`); //string with multiple lines


// // //Taking Decisions

// const age = 14;

// if(age >= 18) {
//     console.log('Ekene can start driving license🚗');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Ekene is too young. Wait another ${yearsLeft} years!😊`);
// }

// const birthYear = 2004;

// let century;
// if(birthYear  <= 2000) {
//    century = 20
// } else {
//     century = 21
// }
// console.log(century); //21st century

//Coding Challenge 2 for Taking Decision
// const massMark = 78; //kg
// const heightMark = 1.69; //m
// const massJohn = 92; //kg
// const heightJohn = 1.95; //m

// // const massMark = 95; //kg
// // const heightMark = 1.88; //m
// // const massJohn = 85; //kg
// // const heightJohn = 1.76; //m

// const BMIMark = massMark / heightMark ** 2; //BMI of Mark
// const BMIJohn = massJohn / heightJohn ** 2; //BMI of John
// const markHigherBMI = BMIMark > BMIJohn; //true or false

// if(BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }


// type conversion 
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear); //1991
// console.log(Number(inputYear) + 18); //199118

// console.log(Number('Ekene')); //NaN
// console.log(typeof NaN);

// console.log(String(23), 23);

// //type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' * '2');

// let n = '1' + 1; 
// n = n - 1; 
// console.log(n); 

// Truthy and Falsy Values
// false values: 0, '', undefined, null, NaN;

console.log(Boolean(0));
console.log(Boolean('Ekene'));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean(''));


const money = 1000;
if (money) {
    console.log("Don't Spend it all:)");
}  else {
    console.log("go and get a Job!");
}

let Height;
if (Height) {
    console.log('YAY ! Height is defined');
}  else {
    console.log('Height is Undefined');
}

