const output = document.querySelector(".output");
console.log(output);

// Callback (first example)
function main(callback) {
  callback();
}

function starter() {
  console.log("Hello World");
}

main(starter);

// Callback (second example)
function greeting(fullName) {
  let val = `Welcome, ${fullName[0]} ${fullName[1]}`;
  console.log(val);
}

function pro1(user, callback) {
  const fullName = user.split(" ");
  callback(fullName);
}

pro1("Dmitriy Angve", greeting);
pro1("Alex Angve", greeting);

const promise = new Promise((resolve, reject));
