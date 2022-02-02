'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
    return str.slice(
        str.lastIndexOf(' ') + 1
    ); // "buzz"
    }

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    let a = str.split(' ');
    return a[a.length - 1];
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
    let I = str.indexOf('I');
    let am = str.indexOf('am');
    let was = str.indexOf('was');
    
    
      let str2 = str.split(" ");
    if ( I != -1 ){
          str2.splice(I , 1, "We" );
          str2.join(" ");
    }
    
    if ( am  != -1 ){
          str2.splice(am-1 , 1, "are" );
    }
    if ( was  != -1 ){
          str2.splice(was-1 , 1, "were" );
    }
        return str2.join(" ");
      
    }

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
    arr.splice(4,1, arr[4]+",");
    return arr.join(' ');
    
      
    }

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
    let str2 = str.split(" ");
    let count = 1;
    let farray = [];
    for ( let i = 0 ; i < str2.length ; i++)
    {
    let str3 = str2[i].split('');
       for ( let j = 0 ; j < str3.length ; j++ )
       {
         while (str3[j] == str3[j+1])
         {
           count = count +1 ;
           j++;
         }
         let d = str3[j] + count ;
         farray.push(d);
         count = 1;
         }
         if (i != str2.length-1)
         {farray.push(" ");}

       }


    
    return farray.join('');
}



module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };