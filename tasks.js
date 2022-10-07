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

