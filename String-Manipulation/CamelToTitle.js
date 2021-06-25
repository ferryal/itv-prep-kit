// Convert a given sentence from camelCase to Title Case
const camelCaseText = "the simplestThings in LIFE are alwaysThe best"

const clean          = text => text.toLowerCase().trim();
const capitalize     = text => `${text[0].toUpperCase()}${text.slice(1)}`;
const splitOnCapital = text => text.replace(/([A-Z])/, (match, capture) => ` ${capture}`);
const noBlanks       = text => !!text

const titleCase = text => {
  return text
    .split(" ")
    .map(splitOnCapital)
    .map(clean)
    .join(' ')
    .split(' ')
    .filter(noBlanks)
    .map(capitalize)
    .join(" ")
}

console.log(titleCase(camelCaseText))
// output : The Simplest Things In Life Are Always The Best