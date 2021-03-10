// input example n = 9, ar = [10,20,20,10,10,30,50,10,20]
function sockMerchant(n, ar) {
    let sorted = ar.sort((a,b) => a - b);
    let result = 0;
    
    for (var i=0; i < n - 1; i++) {
        if (sorted[i] === sorted[i + 1]) {
            result++;
            i += 1;
        }
    }
    return result
}
//output 3
console.log(sockMerchant(9,[10,20,20,10,10,30,50,10,20]))