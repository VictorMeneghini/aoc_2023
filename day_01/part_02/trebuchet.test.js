import discoverCalibration from "./trebuchet";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe("Trebuchet Part 02", () => {
  test("Should return right value from initial_sample.txt provided by AOC", () => {
    const filePath = path.join(__dirname, "initial_sample.txt");

    expect(discoverCalibration(filePath)).toBe(281);
  });

  test("Should return right value from puzzle_input.txt provided by AOC", () => {
    const filePath = path.join(__dirname, "puzzle_input.txt");

    console.log(discoverCalibration(filePath));

    expect(discoverCalibration(filePath)).toBe(54418);
  });
});
