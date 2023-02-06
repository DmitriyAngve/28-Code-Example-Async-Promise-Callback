const output = document.querySelector(".output");
// console.log(output);

// Callback (first example)
function main(callback) {
  callback();
}

function starter() {
  // console.log("Hello World");
}

main(starter);

// Callback (second example)
function greeting(fullName) {
  let val = `Welcome, ${fullName[0]} ${fullName[1]}`;
  // console.log(val);
}

function pro1(user, callback) {
  const fullName = user.split(" ");
  callback(fullName);
}

pro1("Dmitriy Angve", greeting);
pro1("Alex Angve", greeting);

const promise1 = new Promise((resolve, reject) => {
  resolve("ready");
})
  .then((val) => {
    // console.log(val);
    return "Hello";
  })
  .then((val) => {
    //console.log(val);
    return "World";
  })
  .then((val) => {
    //console.log(val);
    return "World";
  })
  .catch((val) => {
    // console.log(val);
  });

const promise2 = new Promise((resolve, reject) => {
  reject("error here");
})
  .then((val) => {
    // console.log(val);
    return "Hello";
  })
  .then((val) => {
    // console.log(val);
    return "World";
  })
  .then((val) => {
    // console.log(val);
    return "World";
  })
  .catch((val) => {
    // console.log(val);
  });

async function test1() {
  return "Hello World";
}

test1().then((val1) => {
  // resolve
  console.log("resolve");
  console.log(val1);
}),
  (val2) => {
    // reject
    console.log("reject");
    console.log(val2);
  };

async function test2() {
  return "Hello World 2";
}

test2()
  .then((val1) => {
    console.log(val1);
    return "Wow";
  })
  .then((data) => {
    console.log(data);
    output.textContent = data;
  });

function greet2(message) {
  return new Promise((res) => {
    setTimeout(() => {
      res(`Message: ${message}`);
    }, 4000);
  });
}

async function greet3(message) {
  const val = await greet2(message);
  console.log(val);
}

greet3("Angve1");
greet3("Angve2");
greet3("Angve3");

const url = "data.json";
const jsonData = async function () {
  try {
    const data = await fetch(url);
    const res = await data.json();
    console.log(res);
    addtoPage(res);
  } catch {
    console.log(err);
  }
};

jsonData();

function addtoPage(arr) {
  arr.forEach((el) => {
    console.log(el);
    output.innerHTML += `<div>${el.first} ${el.last}</div>`;
  });
}
