1. What is the difference between var, let, and const?
   Ans: var has function scope or global scope and can be reassigned and redeclared within the same scope
   let has block scope and can be reassigned but can't be redeclared within the same scope
   const has block scope, you must be declared and initialized at the same and can't be reassign value.
   
   
2. What is the difference between map(), forEach(), and filter()?
    Ans: These are array's methods. we use forEach() when we need to do something using of array's values but we don't want return something. map() used for when we need a updated new array of an existing array. map() always return a new array. filter() used when we need a new array based on a condition it also give a new array.  


3. What are arrow functions in ES6?
    Ans: Arrow functions are a shorter and cleaner way to write functions, introduced in ES6.

    Example: 
    // Regular Function
    function square(x){
        return x * x;
    }

    // arrow function
    cosnt square = x => x * x;


4. How does destructuring assignment work in ES6?
    Ans: Destructuring means unpack or takes the value from arrays or properties from objects.
    we can take values from the array or properties from the objects and assign into a variable.

    Example:
    const arr = [1,2,3,4];
    const [a, b] = [arr];
    console.log(a, b) // 1 2


5. Explain template literals in ES6. How are they different from string concatenation?
    Ans: Template literal is a new way to create string in JS. Instead of using single('') or double("") quotes.
    
    Example: 
    // normal way
    const str1 = "This is normal string"
    // template string
    const str2 = `This is created by template string`

    normal string concatenation: use "+" and is harder to for multi line expressions.
    template string: use `` and ${}, making concatenation easier, shorter and cleaner. 