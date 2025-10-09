const measureRain = (inches) => {
  if (inches === 0 ) {
    return 'drought'
  } else if (inches < 2) {
    return 'dry'
  } else if (inches < 4) {
    return 'average'
  } else if (inches < 6) {
    return 'rainy'
  } else {
    return 'flood'
  }
 
};
console.log(measureRain(7));

const happyBirthdayPet = (breed, age) => {
  if (breed === 'snake') {
    return 'Hiss hiss!'
  } else if (breed === 'cat' && age < 5 ) {
    return 'Mew mew!'
  } else if (breed === 'cat' && age >= 5 ) {
    return 'Meow meow!'
  } else if (breed === 'dog' && age < 5 ) {
    return 'Arf arf!'
  } else if (breed === 'dog' && age >= 5 && age < 10 ) {
    return 'Woof woof!'
  } else if (breed === 'dog' && age >= 10 ) {
    return 'Boof!'
  } else {
    return 'Happy birthday!'
  }

};
console.log(happyBirthdayPet('dog'))

const funTypes = (jsType) => {
 if (jsType === 'string') {
  return "That's just some text."
 } else if (jsType === 'number') {
  return "That's a good number."
 } else if (jsType === 'boolean') {
  return "To bool, or not to bool?"
 } else if (jsType === 'undefined') {
  return "Nothing, but I didn't set that."
 } else if (jsType === 'null') {
  return "Nothing, and I did set that."
 } else if (jsType === 'object') {
  return "Anybody got the key?"
 } else if (jsType === 'array') {
  return "I order you to be indexed."
 } else if (jsType === 'nan') {
  return "Well, now you're just showing off."
 }
}; console.log(funTypes('boolean'))

const rounder = () => {
};

const formatName = () => {
};

const extractDomain = () => {
};

const startsWithVowel = () => {
};

const rotate = () => {
};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  formatName,
  extractDomain,
  startsWithVowel,
  rotate,
};
