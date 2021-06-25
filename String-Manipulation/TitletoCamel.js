// Convert the Title Case back to camelCase
const newTitle = "These Words Should Go In Pairs"
const convertToCamel = text => {
  const words  = text.toLowerCase().split(" ")
  const newArr = []

  // loop over every 2 words and insert as camel_case pair
  for (i = 1; i <= words.length; i += 2) {
    const wordIndex = i - 1;
    const firstWord = words[wordIndex];
    let secondWord  = words[wordIndex + 1];    
    secondWord      = `${secondWord[0].toUpperCase()}${secondWord.slice(1)}` 

    newArr.push(`${firstWord}${secondWord}`);
  } 

  return newArr.join(" ")
}
console.log(convertToCamel(newTitle))
// output theseWords shouldGo inPairs