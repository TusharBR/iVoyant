
const str11 = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
const result11 = str11.match(/love/ig); //[ 'Love', 'love', 'love' ]
console.log(result11?.length); //3

const str22 = "You cannot end a sentence with because because because is a conjunction";
const result22 = str22.match(/because/ig); //[ 'because', 'because', 'because' ]
console.log(result22?.length); //3





