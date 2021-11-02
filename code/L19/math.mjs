// all the logic that we want to be imported from other file

function add(...num){
    let result = 0;
    for(let i of num){
        result += i
    }
    return result
}
function subtract(...num){
    let result = 0;
    for(let i of num){
        result -= i
    }
    return result
}
function times(...num){
    let result = 1;
    for(let i of num){
        result *= i
    }
    return result
}
function divide(...num){
    let result = num[0];
    for(let i = 1; i < num.length; i++){
        result /= num[i]
    }
    return result
}

// Rules to exports a module : 
// 1. We can export multiple things in 1 file
// 2. There 2 types of export:
// - export default (unnamed export)
// - named export

// unnamed export
export default {
    subtract,
    divide
} 

// named exports
export {
    add,
    times
}