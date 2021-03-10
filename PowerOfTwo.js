const PowerOfTwo = (num) => {
    var result = Math.log(num)/Math.log(2);
    return result % 1 === 0;
}

// input 4
// output true
console.log(PowerOfTwo(4))

// input 124
// output false
console.log(PowerOfTwo(124))
