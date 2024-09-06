const myObject = {
    js : "javascript",
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shorcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "cpp", "py", "java"]

for (const key of programming) {
    console.log(programming[key]);
}

