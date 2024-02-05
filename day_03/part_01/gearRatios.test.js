import cubeConundrum from "./gearRatios";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe("gearRatios Part 01", () => {
  test.only("Should return right value from initial_sample.txt provided by AOC", () => {
    const filePath = path.join(__dirname, "initial_sample.txt");

    expect(cubeConundrum(filePath, 13, 12, 14)).toBe(8)

  });

  test("Should return right value from puzzle_input.txt", () => {
    const filePath = path.join(__dirname, "puzzle_input.txt");

    expect(cubeConundrum(filePath, 13, 12, 14)).toBe(2204)
  });
});
