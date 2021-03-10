// example input ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
const FindIntersection = (strArr) => { 

  // code goes here
  let arr1 = strArr[0].split(",");
  let arr2 = strArr[1].split(",");
  let intersectStrings = arr1.filter(function(value){
    return arr2.includes(value);
});

return intersectStrings.toString().replace(/\s+/g, '');

}

// output 1,4,13
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]))