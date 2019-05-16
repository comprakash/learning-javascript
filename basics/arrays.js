var arr = [1, 2, 3]
console.log(arr[0])

console.log(arr[99])
console.log(arr.length)

arr[99] = 5
console.log(arr[99])
console.log(arr.length)

// Internally JS is storing this as Linked List with Hashmaps. Hence space is not wasted