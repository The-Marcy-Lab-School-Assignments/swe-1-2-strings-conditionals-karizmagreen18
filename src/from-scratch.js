const measureRain = (inches) => {
  if (inchesOfRain < 0) {
    return 'invalid';
  }
  else if (inchesOfRain === 0) {
    return 'drought';
  } else if (inchesOfRain < 2) {
    return 'dry';
  } else if (inchesOfRain < 4) {
    return 'average';
  } else if (inchesOfRain < 6) {
    return 'rainy';
  } else
    return 'flood';
 };

const happyBirthdayPet = (breed, age) => {
  if (breed === 'snake') {
    return 'Hiss hiss!';
  } else if (breed === 'cat') {
    if (age < 5) {
      return 'Mew mew!';
    } else if (age >= 5) {
      return 'Meow meow!';
    }
  } else if (breed === 'dog') {
    if (age < 5) {
      return 'Arf arf!';
    } else if (age >= 5 && age < 10) {
      return 'Woof woof!';
    } else if (age >= 10) {
      return 'Boof!';
    }
  } else
    return 'Happy birthday!';

};
/*
Write a function funTypes that takes an argument jsType. The type could be one of the following: a string, a number, a boolean, undefined, null, an object, an array, or NaN.

It should return a message in the following situations:

any string - "That's just some text."
any number - "That's a good number."
a boolean - "To bool, or not to bool?"
undefined - "Nothing, but I didn't set that."
null - "Nothing, and I did set that."
an object - "Anybody got the key?"
an array - "I order you to be indexed."
NaN - "Well, now you're just showing off."
*/

const funTypes = (jsType) => {
  let type = typeof jsType;
  if (jsType === null) {
    return "Nothing, and I did set that.";
  } else if (Array.isArray(jsType)) {
    return "I order you to be indexed.";
  } else if (Number.isNaN(jsType)) {
    return "Well, now you're just showing off.";
  } else if (type === "string") {
    return "That's just some text.";
  } else if (type === "number") {
    return "That's a good number.";
  } else if (type === "boolean") {
    return "To bool, or not to bool?";
  } else if (type === "undefined") {
    return ("Nothing, but I didn't set that.");
  } else if (type === "object") {
    return "Anybody got the key?";
  }
}; 

/* 
Write a function rounder that takes two arguments: float and roundingSetting.

float will be a number with a decimal
roundingSetting will be one of 3 values: up, down, or honest.
rounder should return the float value rounded to an integer based on the following value of roundingSetting:

if roundingSetting is "up" return the float rounded up
if roundingSetting is "down" return the float rounded down
if roundingSetting is "honest" return the float rounded to the nearest integer.
Check out which Math method to use for each scenario!



*/
const rounder = (float, roundingSetting) => {
  if (roundSetting === 'up') {
    return Math.ceil(float);
  } else if (roundSetting === 'down') {
    return Math.floor(float);
  } else if (roundSetting === 'honest') {
    return Math.round(float);
  }
};
// check this one!
const formatName = (first, last) => {
   return `${first[0].toUpperCase() + first.slice(1, first.length).toLowerCase()} ${last[0].toUpperCase() + last.slice(1, last.length).toLowerCase()}`;
};

const extractDomain = (email) => {
return email.slice((email.indexOf('@') + 1));


};


// check these two
const startsWithVowel = (str) => { 
  let vowels = 'aeiou';
  let lowerCase = str.toLowerCase();
  for (let i = 0; i < vowels.length; i++) {
    if (lowerCase[0] === vowels[i]) {
      return true;
    }
  }
  return false;
};


const rotate = (str, num) => {
  while (num > str.length) {
    num -= str.length;}
    return str.slice(str.length - num) + str.slice(0, str.length - num);
};


export default {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  formatName,
  extractDomain,
  startsWithVowel,
  rotate,
};
