//1.Declare a variable named challenge and assign it to an initial value '45 days of internship'.
let challenge:string = '45 days of internship';
// 2.Print the string on the browser console using console.log()
console.log(challenge);//"45 days of internship"
// 3. Print the length of the string on the browser console using console.log()
console.log(challenge.length);//21
// 4. Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());//"45 DAYS OF INTERNSHIP"
// 5. Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());//"45 days of internship"
// 6. Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring (0, 2));  // "45"

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let senc = '30 Days Of JavaScript';
console.log(senc.slice(3, 21));  // "Days Of JavaScript"

// 8. Check if the string contains a word Script using includes() method
console.log(senc.includes('Script'));  // true


// 9. Split the string 30 Days Of JavaScript at the space using split() method
let splitBySpace = senc.split(' ');
console.log(splitBySpace);  // ["30", "Days", "Of", "JavaScript"]

// 10. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companiesnames = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companiesnames.split(', '));  // ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// 11. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let newString = senc.replace('JavaScript', 'Python');
console.log(newString);  // "30 Days Of Python"

// 12. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(senc.charAt(15));  // "S"

// 13.What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(senc.charCodeAt(15));  // 83

// 14. Use indexOf to determine the position of the first occurrence of 'a' in '30 Days Of JavaScript'.
console.log(senc.indexOf('a'));  // 4

// 15. Use lastIndexOf to determine the position of the last occurrence of 'a' in '30 Days Of JavaScript'.
console.log(senc.lastIndexOf('a'));  // 14

// 16. Use indexOf to find the position of the first occurrence of the word 'because' in the sentence:
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));  // 31 

// 17. Use lastIndexOf to find the position of the last occurrence of the word 'because' in the sentence:
console.log(sentence.lastIndexOf('because'));  // 47

// 18. Use search to find the position of the first occurrence of the word 'because' in the sentence:
console.log(sentence.search('because'));  // 31

// 19. Use trim() to remove any trailing whitespace at the beginning and the end of a string.
let stringWithSpaces = ' 30 Days Of JavaScript ';
console.log(stringWithSpaces.trim());  // "30 Days Of JavaScript"

// 20. Use startsWith() method with the string '30 Days Of JavaScript' and make the result true
console.log(senc.startsWith('30'));  // true

// 21. Use endsWith() method with the string '30 Days Of JavaScript' and make the result true
console.log(senc.endsWith('JavaScript'));  // true

// 22. Use match() method to find all the 'a's in '30 Days Of JavaScript'
console.log(senc.match(/a/g));  // ["a", "a", "a"]

// 23. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let p1 = '30 Days of';
let p2 = 'JavaScript';
console.log(p1.concat(' ', p2));  // "30 Days of JavaScript"

// 24. Use repeat() method to print '30 Days Of JavaScript' 2 times
console.log(senc.repeat(2));  // "30 Days Of JavaScript30 Days Of JavaScript"


//****************************************************Level 2************************************************
//  1: Using console.log() print out the following statement
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

//  2: Using console.log() print out the following quote by Mother Teresa
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');

//  3: Check if typeof '10' is exactly equal to 10. If not, make it exactly equal
let num :string|number= '10';
if (typeof num !== 'number') {
  num = Number(num); 
}
console.log(num); // 10 //number type

//  4: Check if parseFloat('9.8') is equal to 10. If not, make it exactly equal to 10
let num2 = parseFloat('9.8');
if (num2 !== 10) {
 num2= Math.ceil(num2) 
}
console.log(num2); // Output: 10

//  5: Check if 'on' is found in both 'python' and 'jargon'
const py = 'python';
const ja = 'jargon';
console.log(py.includes('on') && ja.includes('on')); // Output: true

//  6: Check if 'jargon' is in the sentence
const sentence2 = 'I hope this course is not full of jargon.';
console.log(sentence2.includes('jargon')); // Output: true

//  7: Generate a random number between 0 and 100 inclusively
const randomnum1 = Math.floor(Math.random() * 101);
console.log("random number between 0 and 100 inclusively"+randomnum1); // 64

//  8: Generate a random number between 50 and 100 inclusively
const randomnum2 = Math.floor(Math.random() * 50) + 50;
console.log("random number between 50 and 100 inclusively"+randomnum2); // 76

//  9: Generate a random number between 0 and 255 inclusively
const randomnum3 = Math.floor(Math.random() * 256);
console.log("random number between 0 and 255 inclusively"+randomnum3); //135

//  10: Access the 'JavaScript' string characters using a random number
const str2 = 'JavaScript';
const randomindx = Math.floor(Math.random() * str2.length);
console.log(str2[randomindx]); // r

//  11: Use console.log() and escape characters to print the following pattern
let result = "";
for(let fi=1;fi<5+1;fi++){
    result += fi + " ";
    
    for(let i=0;i<5-1;i++)
        {
            result += Math.pow(fi,i) + " ";
        }
        console.log(result);
        result='';
}

//  12: Use substr() to slice out the phrase 'because because because' from the sentence
let slicedPhrase = 'You cannot end a sentence with because because because is a conjunction'
let fr=slicedPhrase.substring(slicedPhrase.indexOf('because'), slicedPhrase.lastIndexOf('because')+"because".length);
console.log(fr); //'because because because'


//*********************************level3******************************** */
//question 1:
const str11 = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
const result11 = str11.match(/love/ig); //[ 'Love', 'love', 'love' ]
console.log(result11?.length); //3
//question 2
const str22 = "You cannot end a sentence with because because because is a conjunction";
const result22 = str22.match(/because/ig); //[ 'because', 'because', 'because' ]
console.log(result22?.length); //3