let gamespeed = 500
let Interval
let currentpiece = ''
const tiles = document.getElementsByClassName("tile");
let activeTiles = []
class Tile {
  constructor(row, column) {
    this.row = row;
    this.column = column;
    this.id = `r${row}c${column}`;
  }
}
const I = {
  color: "cyan",
  Shape1: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  Shape2: [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0]
  ],
  Shape3: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0]
  ],
  Shape4: [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0]
  ]
}
const L = {
  color: "Orange",
  Shape1: [
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  Shape2: [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
  ],
  Shape3: [
    [0, 0, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]
  ],
  Shape4: [
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 0]
  ]
};
const J = {
  color: "blue",
  Shape1: [
    [0, 0, 0, 1],
    [0, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  Shape2: [
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]
  ],
  Shape3: [
    [0, 0, 0, 0],
    [0, 1, 1, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 0]
  ],
  Shape4: [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
  ]
};
const O = {
  color: "yellow",
  Shape1: [
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  Shape2: [
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  Shape3: [
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  Shape4: [
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
};
const Z = {
  color: "red",
  Shape1: [
    [0, 1, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  Shape2: [
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]
  ],
  Shape3: [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 0]
  ],
  Shape4: [
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0]
  ]
};
const T = {
  color: "purple",
  Shape1: [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
};
const S = {
  color: "green",
  Shape1: [
    [0, 1, 1, 0],
    [0, 0, 1, 1]
  ]
};
let possiblePieces = [I, L, J, O, Z, T, S]
document.addEventListener("keydown", function (e) {
  let key = e.key
  if (key == "a") {
    movement(-1);
  }
  if (key == "d") {
    movement(1)
  }
  if (key == "w") {
    currentpiece2 = currentpiece
    while (currentpiece2 == currentpiece) {
      pieceUpdate();
    }
    currentpiece2 = ''
  }
  if (key == "s") {
    pieceUpdate();
  }
  if (key == "e") {
    rotate(1)
  }
  if (key == "q") {
    rotate(-1)
  }
})
function rotate(value) {
  x = activeTiles[0]
  newspawn = []
  for (n = x.id.match(/[a-zA-Z]+|[0-9]+/g)[1]; n <= x.id.match(/[a-zA-Z]+|[0-9]+/g)[1] + 3; n++) {
    newspawn[n] = []
    for (i = x.id.match(/[a-zA-Z]+|[0-9]+/g)[3]; i <= x.id.match(/[a-zA-Z]+|[0-9]+/g)[3] + 3; i++) {
      try {
        if (currentpiece["Shape" + (currentrotation + value)][n - (n - 1)][i - (i - 1)] == 1 && !(document.getElementById("r" + n + "c" + i).innerHTML == 0 || document.getElementById(sample).innerHTML == 1)) {
          console.log("whoops")
          return true
        }
      }
      catch (err) {
        console.log("whoopsw")
        return true
      }
    }
  }
  for (let x of activeTiles) {
    x.style.backgroundColor = "white"
    x.style.color = "white"
    x.innerHTML = "0"
  }
  activeTiles = []
  for (let x of newspawn) {
    //if()
    document.getElementById(x).innerHTML = 1
    document.getElementById(x).style.backgroundColor = currentpiece.color
    document.getElementById(x).style.color = currentpiece.color
    activeTiles.push(document.getElementById(x))
  }
}
function movement(value) {
  newspawn = []
  for (let x of activeTiles) {
    sample = x.id.match(/[a-zA-Z]+|[0-9]+/g)
    sample[3] = parseInt(sample[3]) + value
    sample = sample.join("")
    newspawn.push(sample)
    try {
      if (!(document.getElementById(sample).innerHTML == 0 || document.getElementById(sample).innerHTML == 1)) {
        return true
      }
    }
    catch (err) {
      return true
    }
  }
  for (let x of activeTiles) {
    x.style.backgroundColor = "white"
    x.style.color = "white"
    x.innerHTML = "0"
  }
  activeTiles = []
  for (let x of newspawn) {
    document.getElementById(x).innerHTML = 1
    document.getElementById(x).style.backgroundColor = currentpiece.color
    document.getElementById(x).style.color = currentpiece.color
    activeTiles.push(document.getElementById(x))
  }
}
function createBoard(height, width) {
  if (height >= 3) {
    if (width >= 6) {
      document.getElementById("board").innerHTML = "";
      for (let i = 1; i <= height; i++) {
        let row = "";
        for (let j = 1; j <= width; j++) {
          let tile = new Tile(i, j);
          row += "<div id=\"".concat(tile.id, "\" class=\"tile r").concat(tile.row, " c").concat(tile.column, "\">0</div>");
        }
        board.innerHTML += "<div id=\"r".concat(i, "\" class=\"row\">").concat(row, "</div>");
      }
      document.getElementById("board").style.minWidth = (width * 30) + "px";
      document.getElementById("definerows").value = "";
      document.getElementById("definecolumns").value = "";
      window.spawnArray = CreateSpawn(width);
      window.width = width
      window.height = height
      CreatePiece(possiblePieces[Math.floor(Math.random() * possiblePieces.length)])
    }
  }
}
function pieceUpdate() {
  newspawn = []
  for (let x of activeTiles) {
    sample = x.id.match(/[a-zA-Z]+|[0-9]+/g)
    sample[1] = parseInt(sample[1]) + 1
    sample = sample.join("")
    newspawn.push(sample)
    try {
      if (!(document.getElementById(sample).innerHTML == 0 || document.getElementById(sample).innerHTML == 1)) {
        for (let x of activeTiles) {
          x.innerHTML = 2
        }
        newspawn = []
        activeTiles = []
        window.clearInterval(Interval)
        Interval = null
        CreatePiece(possiblePieces[Math.floor(Math.random() * possiblePieces.length)])
        return true
      }
    }
    catch (err) {
      for (let x of activeTiles) {
        x.innerHTML = 2
      }
      newspawn = []
      activeTiles = []
      window.clearInterval(Interval)
      Interval = null
      CreatePiece(possiblePieces[Math.floor(Math.random() * possiblePieces.length)])
      return true
    }
  }
  for (let x of activeTiles) {
    x.style.backgroundColor = "white"
    x.style.color = "white"
    x.innerHTML = "0"
  }
  activeTiles = []
  for (let x of newspawn) {
    document.getElementById(x).innerHTML = 1
    document.getElementById(x).style.backgroundColor = currentpiece.color
    document.getElementById(x).style.color = currentpiece.color
    activeTiles.push(document.getElementById(x))
  }
}
function CreateSpawn(columns) {
  spawn = []
  for (let i = 1; i <= columns; i++) {
    spawn.push(i)
  }
  spawncut = (columns - 4) / 2
  spawn = spawn.slice(spawncut, -spawncut)
  return spawn;
}
function CreatePiece(piece) {
  for (let n = 1; n <= 2; n++) {
    for (let i = spawnArray[0]; i <= spawnArray[3]; i++) {
      if (document.getElementById("r" + n + "c" + i).innerHTML <= 1) {
        document.getElementById("r" + n + "c" + i).innerHTML = piece.Shape1[n - 1][spawnArray[3] - i]
        if (document.getElementById("r" + n + "c" + i).innerHTML == 1) {
          document.getElementById("r" + n + "c" + i).style.backgroundColor = piece.color
          document.getElementById("r" + n + "c" + i).style.color = piece.color
          activeTiles.push(document.getElementById("r" + n + "c" + i))
        } else {
          document.getElementById("r" + n + "c" + i).style.backgroundColor = "white"
          document.getElementById("r" + n + "c" + i).style.color = "white"
        }
      }
    }
    currentpiece = piece
    currentrotation = 1
    Interval = window.setInterval(pieceUpdate, gamespeed)
    possiblePieces.splice(possiblePieces.indexOf(piece), 1)
    if (possiblePieces.toString() == '') {
      possiblePieces = [I, L, J, O, Z, T, S]
    }
  }/*else{
  for(x of tiles){
    x.remove()
  }*/
}

function ClearRow() {
  storedrows = []
  for (n = 1; n <= height; n++) {
    rowchecker = []
    fullrow = []
    for (i = 1; i <= width; i++) {
      rowchecker.push(document.getElementById("r" + n + "c" + i).innerHTML)
      fullrow.push("2")
      if (rowchecker.toString() == fullrow.toString() && rowchecker.length == width) {
        for (x of rowchecker) {
          document.getElementById("r" + n + "c" + i).style.backgroundColor = "white"
          document.getElementById("r" + n + "c" + i).style.color = "white"
          document.getElementById("r" + n + "c" + i).innerHTML = "0"
        }
      }
      // for(x of )
    }
    storedrows.push(rowchecker)
    if (storedrows[n - 1].toString == fullrow.toString) {
      storedrows.pop()
      newline = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      storedrows.unshift(newline)
    }
  }
}
//const spectile = document.getElementById("r"+n+"c"+i)