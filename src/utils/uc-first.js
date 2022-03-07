// api gives all lowercase...
const ucFirst = (text) => {
  return String(text)
    .split(/\s+/g)
    .reduce((value, word) => {
      value += " " + ucfirst_(word);
      return value;
    }, "")
    .trim();
};

export default ucFirst;

function ucfirst_(word) {
  return word[0]?.toUpperCase() + word.substr(1).toLowerCase();
}
