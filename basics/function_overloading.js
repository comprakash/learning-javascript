function add(x, y) {
    return x + y;
}

// Javascript everything is varargs. So Function overloading is not possible
console.log(add(2, 3));
console.log(add(2, 3, 4, 5));
console.log(add(2));