const Palindrome = (str) => {
    let strCheck = str.replace(/[^a-zA-Z0-9]+/gi,'').toLowerCase();
    return strCheck === strCheck.split('').reverse().join('');
}

//input "never odd or even"
//output true
console.log(Palindrome("never odd or even"))

//input eye
//output true
console.log(Palindrome("eye"))