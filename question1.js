// Using an example, explain the difference between block,global and function scope in variables.

// [A variable declared outside of any function or block has a global scope]


let accessories = "earrings";
console.log(accessories); 

// [we access the global scope in function but we dont access the variable in function out of function]

function firstName(name) {
    let result = `hello ${name}`;
    return result;
  }
  console.log(result);

//   block
// block scope just show the variable inside
{
    let accessories = "earrings";
    console.log(accessories); 
}
