// Convert any word to Pig Latin, see how to convert here => https://en.wikipedia.org/wiki/Pig_Latin
const word = "hamlet"
const pigLatin = word => {
  const vowel = /[aeiou]/i;
  const firstVowelIndex = word.indexOf(word.match(vowel)[0]);
  const startsWithVowel = firstVowelIndex === 0;

  return startsWithVowel
    ? `${word}ay`
    : `${word.slice(firstVowelIndex)}${word.substr(0, firstVowelIndex)}ay`;
}
console.log(pigLatin(word));
// output amlethay