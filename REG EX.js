//? Using the Test Method
// let testStr = "freecodeCamp";
// let testRegx = /code/;
// console.log(testRegx.test(testStr));
//!-----
//? Match Literal Strings
// let testStr = "hello my name is Kelvin";
// let testRegx = /Kelvin/;
// console.log(testRegx.test(testStr));
//!-----
//? Match a Literal String with Different Possibilities
// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/; // Change this line
// let result = petRegex.test(petString);
// console.log(result);
//!-----
//? Ignore Case While Matching
// let myString = "freeCodeCamp";
// let fccRegex = /camp/i; // Change this line
// let result = fccRegex.test(myString);
// console.log(result);
//!---------------
//?Extract Matches
// console.log("hello world".match(/hello/));
// let ourStr = "regular expression";
// let ourRegex = /expression/;
// console.log(ourStr.match(ourRegex));

//? problem on above
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/;
// let result = extractStr.match(codingRegex);
// console.log(result);
//!------
//? Find More Than the First Match g flag
// let testStr = "repeat repeat repeat";
// let ourRegx = /repeat/g;
// console.log(testStr.match(ourRegx));
//? problem of that
// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /twinkle/gi;
// let result = twinkleStar.match(starRegex);
//!-----
//?Match Anything with Wildcard Period
// let humStr = "i will hum a song";
// let hugStr = "bear hug";
// let huRegex = /hu./;

// console.log(hugStr.match(huRegex));
// console.log(humStr.match(huRegex));

//? problem based on that
// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /.un/;
// let result = unRegex.test(exampleStr);

//!-----
//? Match Single Character with Multiple Possibilities
// let bigStr = "big";
// let bagStr = "bag";
// let bugStr = "bug";
// let bogStr = "bog";

// let bgRegex = /b[aiu]g/;

// bigStr.match(bgRegex);
// bagStr.match(bgRegex);
// bugStr.match(bgRegex);
// bogStr.match(bgRegex);

//? problem based on that
// let quoteSample =
//   "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi; // Change this line
// let result = quoteSample.match(vowelRegex); // Change this line

// console.log(result);
//!-----
//? Match Letters of the Alphabet
// let catStr = "cat";
// let batStr = "bat";
// let matStr = "mat";

// let bigRegx = /[a-e]at/;

// catStr.match(bigRegx);
// batStr.match(bigRegx);
// matStr.match(bigRegx);

//? problem based on that
// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[abcdefghijklmnopqrstuvwxyz]/gi; // Change this line
// let result = quoteSample.match(alphabetRegex); // Change this line
// console.log(result);

//!-----

//? Match Numbers and Letters of the Alphabet
// let jennyStr = "Jenny8675309";
// let myRegex = /[a-z0-9]/gi;

// console.log(jennyStr.match(myRegex));

//!----------
