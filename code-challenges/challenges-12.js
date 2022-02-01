'use strict';
// Important Note: 
// Kindly use filter instead of for in all of your solutions

// Resource:
// Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 1) ---------------------
// 
// Given an array of values use filter to extract odd values.
//  
// EX:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200] ==> [89, 41, 31, 111, 31]
// 
// ------------------------

const oddFiltration = (arr) => {
    return arr.filter(num => num%2 != 0 )
    }

// 2) ---------------------
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// EX:
// var cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 4,
//         tech: "Java"
//     }
// ]
//
//   ===>
//
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name
// ------------------------

const cvsFiltration = (arr) => {
    var filterOb = arr.filter(word=> 
    word.yearsOfExperience > 4 & word.tech == 'JS')
    if( filterOb.firstName == null ){
        filterOb.firstName = "";
    }
    if( filterOb.LastName == null ){
        filterOb.LastName = "";
    }
    const FiltCV = {
      fullName: "",
      tech: "",
    }
    
    const filtArr =[];
    for (let i=0; i< filterOb.length ; i++){
      FiltCV.fullName = filterOb[i].firstName +" " + filterOb[i].LastName ;
      FiltCV.tech = filterOb[i].tech;
      filtArr.push(FiltCV);
    
    }
    
      return filtArr;
    }

// 3) ---------------------
//
// Given an array of words filter the names that contains one of the vowels (a, e, i, o, u)

// EX:
// ['car', 'boy', 'spy', 'building', 'why', 'dry' ] ==> ['spy', 'why', 'dry']
// 
// ------------------------

const vowelsFiltration = (arr) => {
    return  arr.filter(str => !(/[aeiou]/i.test(str)));
  }  

// 4) ---------------------
//
// An employer wants to compare between his employees skills, write a function that will extract the differences 
// between the employees skills.

// EX:
// first_Employee = [C, C#, Java, Angular, PHP]
// first_Employee = [C#, .Net, JavaScript, React, Angular]
// ==>
// result = [C, Java, PHP, .Net, JavaScript, React]
// Hint:
// - the 'include' method can help you, read about it.
// ------------------------

const skillComparison = (arr1, arr2) => {
    var FirArray = arr1.filter(
    word=>!arr2.includes(word));
    
    var sconArray  = arr2.filter(word=> !arr1.includes(word));
    
  return FirArray.concat(sconArray);
  
  }
  


module.exports = { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison };

