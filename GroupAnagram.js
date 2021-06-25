function groupAnagrams(strs) {
  let result = {};
for (let word of strs) {
    let cleansed = word.split("").sort().join("");
    if (result[cleansed]) {
      result[cleansed].push(word);
    } else {
      result[cleansed] = [word];
    }
  }
return Object.values(result);
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
const words = ["katak", "takak", "kasur", "rusak", "surak", "foo", "bar"];
console.log(groupAnagrams(words))
// result sama aja 
// [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
// [ [ 'katak', 'takak' ],
//   [ 'kasur', 'rusak', 'surak' ],
//   [ 'foo' ],
//   [ 'bar' ] ]