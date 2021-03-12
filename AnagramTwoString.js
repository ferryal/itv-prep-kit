 function anagrams(stringA, stringB) {
        /*First, we remove any non-alphabet character using regex and convert       
        convert the strings to lowercase. */
        stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
        stringB = stringB.replace(/[^\w]/g, '').toLowerCase()
        console.log(stringA);
        console.log(stringB);

        /*Next, we check if the lengths of the strings are equal. 
        If they are anagrams, they will have the same length. */
        if (stringA.length !== stringB.length) {
            return false
        }

        let arrB = stringB.split("")

        for (let char of stringA ){ 
            if (!arrB.includes(char)) {
                return false
                break;
            } else {
                arrB.splice(arrB.indexOf(char), 1)
            }
        }

        return true

    }

    console.log(anagrams('rail safety', 'fairy tales'))


    function anagramsSimple(stringA, stringB) {
        return cleanString(stringA) === cleanString(stringB)
    }
    
    function cleanString(str) {
        return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('')
    }

console.log(anagramsSimple("Hello","!@#ElLoH")) // true
console.log(anagramsSimple("Helo","!@#ElLoH")) // false
