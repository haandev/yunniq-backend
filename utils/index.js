const toKebabCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");

const isStartsCapital = (str) =>
  str && str.charAt(0) === str.charAt(0).toUpperCase();

module.exports = {
  toKebabCase,
  isStartsCapital,
};
