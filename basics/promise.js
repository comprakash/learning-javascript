// fetch("https://api.randomuser.me/?nat=US&results=10")
//   .then(response => response.json())
//   .then(members => console.log(members))
//   .catch(err => console.error(err));

let asyncFunc = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("DONE"), 100);
  });
};

asyncFunc().then(x => console.log("Result_1: " + x));
console.log("Global");

async function main() {
  // Await will block the execution of statements underneath it
  const x = await asyncFunc(); // (A)
  console.log("Inside Main");
  console.log("Result_2: " + x); // (B)
}
main();

async function main2() {
  console.log("Inside Main2");
  asyncFunc().then(x => console.log("Result_3: " + x));
}
main2();
