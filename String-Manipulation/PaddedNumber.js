// Pad given single numbers in array to look like "10", "05", "16", "02"
const nums = ['2', '4', '25', '10', '3'];
const padNumber = number => (+number < 10) ? `0${number}` : number;
const paddedNum = nums.map(padNumber);

console.log(paddedNum);
// output : [ '02', '04', '25', '10', '03' ]