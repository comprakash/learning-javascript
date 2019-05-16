// Function names can contain letters, digits, underscores, and dollar signs
function add1(x, y) {
    var sum = x + y
    return sum
}

// Accessing a function without () will return the function definition instead of the function result:
add1

// The () Operator Invokes the Function
console.log("sum =", add1(2, 3))

var add2 = function (x, y) {
    var sum = x + y
    return sum
}

// ES6 style. Arrow Functions
var add3 = (x, y) => {
    var sum = x + y
    return sum
}

// Nested Functions
function outer() {
    function inner() {
        console.log("Nested Functions")
    }
    inner()
}
outer();

(() => (() => console.log("Nested Functions with Arrow Functions"))())()

let  names = {
    cities: ["Blr","Del","Mum","Pune"],
    print: function(delay=1000) {
    //   setTimeout(function() {
    //     console.log(this.cities.join(","))
    //   }, delay)
    // Will throw error as this.cities will be undefined
    // Nested blocks always refer this to global instead of its parent

    // Fix this with Arrow Functions in ES6
      setTimeout(() => {
        console.log(this.cities.join(","))
      }, delay)
    }
  }

  names.print()