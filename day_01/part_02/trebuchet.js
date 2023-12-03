import fs from "fs";

const MAP_OF_NUMBERS = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  eno: 1,
  owt: 2,
  eerht: 3,
  ruof: 4,
  evif: 5,
  xis: 6,
  neves: 7,
  thgie: 8,
  enin: 9,
};

const VALID_DIGITS = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "eno",
  "owt",
  "eerht",
  "ruof",
  "evif",
  "xis",
  "neves",
  "thgie",
  "enin",
];

const discoverCalibration = (pathToDocument) => {
  const input = fs.readFileSync(pathToDocument, {
    encoding: "utf-8",
  });

  const lines = input.split("\n");

  return lines.reduce((acc, line) => {
    return (acc += extractFirstAndLastDigit(line));
  }, 0);
};

const extractFirstAndLastDigit = (text) => {
  let firstDigit;
  let lastDigit;

  const regexPattern = new RegExp(`(${VALID_DIGITS.join("|")}|\\d)`, "g");

  let parsedText = text.match(regexPattern) || [];

  let backwardParsedText =
    text.split("").reverse().join("").match(regexPattern) || [];

  firstDigit = parsedText.find(
    (digit) => VALID_DIGITS.includes(digit) || !isNaN(digit)
  );

  lastDigit = backwardParsedText.find(
    (digit) => VALID_DIGITS.includes(digit) || !isNaN(digit)
  );

  return Number(turnsIntoADigit(firstDigit) + turnsIntoADigit(lastDigit));
};

const turnsIntoADigit = (value) => String(MAP_OF_NUMBERS[value] || value);

export default discoverCalibration;
