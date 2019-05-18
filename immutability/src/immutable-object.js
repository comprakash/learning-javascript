const { fromJS } = require('immutable');

const data = fromJS({ name: 'Ajay' });
const newNameData = data.set('name', 'Vijay');

console.log(data.get('name')); 
console.log(newNameData.get('name')); 