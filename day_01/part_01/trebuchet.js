import fs from "fs";

export default discoverCalibration = (pathToDocument) => {
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

  for (let i = 0; i < text.length; i++) {
    if (text[i] >= "0" && text[i] <= "9") {
      if (firstDigit === undefined) {
        firstDigit = i;
      }
      lastDigit = i;
    }
  }

  return Number(text[firstDigit] + text[lastDigit]);
};
