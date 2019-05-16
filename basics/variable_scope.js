var topic = "JavaScript"

if (topic) {
    let topic = "React"
    console.log('block: ', topic)
}

function myFunction() {
    var topic = "TypeScript"
    console.log('function: ', topic)
}

myFunction()

console.log('global: ', topic)