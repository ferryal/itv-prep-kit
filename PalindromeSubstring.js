function PalindromeSubString(str) {
    let x = 0;
    let y = 0;
    let number = 0;
    let result = '';
    let strLen = str.length;

    const expandCenter = (s, left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }
    console.log(expandCenter)

    for(let i=0; i< strLen; i++) {
        number = Math.max(expandCenter(str, i, i), expandCenter(str, i, i +1));
        if (number > y -x) {
            x = i - Math.floor((number - 1)/2);
            y = i + Math.floor(number / 2);
        }
    }

    if (str.slice(x, y + 1).length > 2) {
        result = str.slice(x, y + 1);
    } else {
        result = 'none'
    }

    return result;
}

console.log(PalindromeSubString('hellosannasmith'))