const x = 10;

console.log(x);

if (x > 1) {
    // This is allowed as this is block scope
    const x = 5;
    console.log(x);
}

console.log(x);