import fs from "fs";

export default cubeConundrum = (pathToDocument, green, red, blue) => {
  const input = fs.readFileSync(pathToDocument, {
    encoding: "utf-8",
  });

  const lines = input.split("\n");

  let sumOfValidGameIds = 0;

  lines.forEach(line => {
    if (isGameValid(line, green, red, blue)) {
      sumOfValidGameIds += extractGameId(line);
    }
  });

  return sumOfValidGameIds;

};

const isGameValid = (gameLine, green, red, blue) => {
  const gameData = gameLine.split(":")[1];
  const rounds = gameData.split(";");

  for (let round of rounds) {
    const cubes = parseCubes(round);
    if (!areCubesValid(cubes, green, red, blue)) {
      return false;
    }
  }

  return true;
}

const parseCubes = (round) => {
  return round.trim().split(",").reduce((acc, value) => {
    const [cubeValue, color] = value.trim().split(" ");
    acc[color] = Number(cubeValue);
    return acc;
  }, {});
}

const areCubesValid = (cubes, green, red, blue) => {
  return (!cubes.green || cubes.green <= green) &&
         (!cubes.red || cubes.red <= red) &&
         (!cubes.blue || cubes.blue <= blue);
}

const extractGameId = (gameLine) => {
  return parseInt(gameLine.split(" ")[1], 10);
}