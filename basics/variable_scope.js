var topic = "JavaScript"

if (topic) {
    let topic = "React"
    console.log('block: ', topic)
}

function myFunction() {
    var topic = "TypeScript"
    console.log('function/local: ', topic)
}

myFunction()

console.log('global: ', topic)