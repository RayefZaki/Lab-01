// التمرين الاول
// const prompt2 = require('prompt');

// prompt2.start();
	
// prompt2.get(['num1', 'num2','op'], function (err, result) {
// 	if (result.op ==='+'){
//         console.log(Number(result.num1)+ Number(result.num2 ));
        
//     }
// 	if (result.op ==='-'){
//         console.log(Number(result.num1)- Number(result.num2 ));
        
//     }
// 	if (result.op ==='*'){
//         console.log(Number(result.num1)* Number(result.num2 ));
        
//     }
// 	if (result.op ==='/'){
//         console.log(Number(result.num1)/ Number(result.num2 ));
        
//     }
// // Printing the result
// console.log('num1: ' + result.num1);
// console.log('num2: ' + result.num2);
// })


// التمرين الثاني

interface IUser {
    firstName: string;
    age: number;
    specialization: string;
  }

  let User1:IUser = {
    firstName: 'Rayef',
    age: 26,
    specialization: 'Computer Engneering'
}
  let User2:IUser = {
    firstName: 'Adnan',
    age: 24,
    specialization: 'Computer Engneering'
}

  
  let User3 : IUser = {
    firstName: 'Fesal',
    age: 32,
    specialization: 'Mechanical Engineering'
}

console.log(User1.firstName);
console.log(User2.specialization);
console.log(User3.age);