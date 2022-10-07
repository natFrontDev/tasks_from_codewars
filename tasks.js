// 1. Complete the solution so that it reverses all of the words within the string passed in.
function reverseWords(str){
    return str.split(' ').reverse().join(' ')
}

// 2. Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
function abbrevName(name){
    return name.split(' ').map(n => n[0].toUpperCase()).join('.')
}

// 3. Convert number to reversed array of digits
function digitize(n) {
    return String(n).split('').map(Number).reverse()
}

// 4. Write a function which converts the input string to uppercase.
function makeUpperCase(str) {
    return str.toUpperCase()
}

// 5. Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
function greet(name){
    return `Hello, ${name} how are you doing today?`
}

// 6. 7 kya. In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number. highAndLow("1 2 -3 4 5");
function highAndLow(numbers){
    numbers = numbers.split(' ')
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}

// 7. Very simple, given an integer or a floating-point number, find its opposite.
function opposite(number) {
    return -number;
}

// 8. Write a function to split a string and convert it into an array of words.
const stringToArray = string => string.split(' ')

