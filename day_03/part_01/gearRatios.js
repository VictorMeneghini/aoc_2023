import fs from "fs";


const VALID_SYMBOLS = [
  "*",
  "#",
  "+",
  "$"
]

export default gearRatios = (pathToDocument) => {
  const input = fs.readFileSync(pathToDocument, {
    encoding: "utf-8",
  });

  const lines = input.split("\n");
  const matriz = lines.map(row => row.split(""))

  for (let y = 0; y < matriz.length; y++) {
    for (let x = 0; x < matriz[y].length; x++) {
      console.log(checkAround(matriz,y,x))
    }
  }
};

const checkAround = (matriz, positionY, positionX) => {
  if (!VALID_SYMBOLS.includes(matriz[positionY][positionX])) return false
    
  let x = positionX
  let y = positionY

  let cp = matriz

  const positions = [   // 0 = y, 1 = x
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1,1],
    [1, -1],
    [-1, -1],
    [-1, 1]
  ]

  positions.forEach(([py, px]) => {
    let newX = x + px
    let newY = y + py

    if (newX > -1 && newY > -1 && newX < matriz.length  && newY < matriz.length ) {
      // cp[newX][newY] = `*${cp[newX][newY]}*`
      
      checkNumber(cp[newX][newY])
    }
  
  })
}

const checkNumber = (row) => {
  console.log(row)
}