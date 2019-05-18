const { List } = require('immutable');

// ......... ES5 .................

const pets = ['cat', 'dog'];
pets.push('goldfish');
pets.push('tortoise');

console.log('1. ',  pets);




const pets2 = List(['cat', 'dog']);
const finalPets2 = pets2.push('goldfish').push('tortoise');

console.log('2. ',  pets2.toJS()); // prints ['cat', 'dog'];
console.log('3. ', finalPets2.toJS());