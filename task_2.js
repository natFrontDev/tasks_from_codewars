// 2. Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
function abbrevName(name){
    return name.split(' ').map(n => n[0].toUpperCase()).join('.')
}