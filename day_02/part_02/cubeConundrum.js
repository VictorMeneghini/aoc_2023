import fs from "fs";

export default function cubeConundrum(pathToDocument) {
  const input = fs.readFileSync(pathToDocument, {
    encoding: "utf-8",
  });

  const lines = input.split("\n");
  let sumOfValidGameIds = 0;

  lines.forEach(line => {
    sumOfValidGameIds += multiplyCubesValues(getLowestSetPossible(line));
  });
  
  return sumOfValidGameIds;
};

function getLowestSetPossible(gameLine) {
  const [, gameData] = gameLine.split(":");
  const rounds = gameData.split(";");

  const lowestSetPossible = {
    blue: 0,
    green: 0,
    red: 0
  };

  rounds.forEach(round => {
    const cubes = parseCubes(round);
    Object.keys(cubes).forEach(color => {
      if (cubes[color] > lowestSetPossible[color]) {
        lowestSetPossible[color] = cubes[color];
      }
    });
  });

  return lowestSetPossible;
}

function parseCubes(round) {
  return round.trim().split(",").reduce((acc, value) => {
    const [cubeValue, color] = value.trim().split(" ");
    acc[color] = Number(cubeValue);
    return acc;
  }, {});
}

function multiplyCubesValues(cubes) {
  return Object.values(cubes).reduce((acc, value) => acc * value, 1);
}
