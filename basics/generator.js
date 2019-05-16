function * generatorFunction() { 
    console.log('This will be executed first.');

    yield 'JS - Powerful ';   

    console.log('printed after the pause');

    yield 'Language.';
}


const generatorObject = generatorFunction(); 

console.log(generatorObject.next().value); 
console.log(generatorObject.next().value); 
console.log(generatorObject.next().value); 