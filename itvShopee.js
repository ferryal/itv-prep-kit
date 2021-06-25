// true / false
function isPalindrome(word) {
	let wordCheck = word.split('');
  for (let i=0; i < Math.floor(word.length / 2); i++) {
		if (wordCheck[i] !== wordCheck[wordCheck.length - i - 1]) {
    	return false;
    }
    return true;
	}
}

// 1 1 2 3 5 8 13 ...

function fibonacci(n) {
	return n < 1 || n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2) 
}
// fibonacci(4) => fibonacci(3) + fibonacci(2)
// fibonacci(5) => fibonacci(4) + fibonacci(3)
// fibonacci(6) => fibonacci(5) + fibonacci(4)


fibonacci(5) // 5
fibonacci(7) // 13

isPalindrome("katak") // true
isPalindrome("masak") // false

// css question explain position css