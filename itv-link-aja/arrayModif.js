const numbers = [1, 2, 3, 4, 5];

function arrayModify(arr) {
  const tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element % 2 === 0) {
      tempArr.push(element * 2);
    } else {
      tempArr.push(element * 3);
    }
  }
  return tempArr;
}

console.log(arrayModify(numbers)); // [ 3, 4, 9, 8, 15 ]