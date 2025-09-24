const str = "Hello World";
let reversedStr = "";

// for(let char of str) {
//     reversedStr = char + reversedStr;
// }

for(let i=str.length-1; i>=0; i--) {
    reversedStr += str[i];
}

let abc=0
for(let i=0; i<str.length; i++) {
    // abc+=1;
    console.log(i)
}

// console.log(abc);
console.log(str.length-1)

// console.log(reversedStr);