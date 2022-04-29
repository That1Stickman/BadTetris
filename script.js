class Tile {
    constructor(row, column, state) {
        this.row = row;
        this.column = column;
        this.id = `r${row}c${column}`;
        this.state = state;
        this.color = null;
    }
}
function createBoard(width, height, board) {
  if (width>=3){
    if (height>=4){
      document.getElementById("board").innerHTML="";
    for (var i = 1; i <= width; i++) {
        var row = "";
        for (var j = 1; j <= height; j++) {
            var tile = new Tile(i, j,0);
            row += "<div id=\"".concat(tile.id), "\" class='tile'></div>";
        }
        board.innerHTML += "<div id=\"r".concat(i, "\" class='tile'></div>");
    }
  document.getElementById("board").style.minWidth= (height*30)+"px";
  document.getElementById("definerows").value = "";
  document.getElementById("definecolumns").value = "";
                }
    }
  BoardSpawn = CreateSpawn(height);
  
}

class Piece{
  //setInterval(pieceUpdate, gamespeed)
  
}
const I = { 
  color: "cyan",
  pieceShape: [
    [1,1,1,1],
    [0,0,0,0]
  ]
}
const J = {
  color: "blue",
  pieceShape: [
    [1,0,0,0],
    [1,1,1,0]
  ]
};
const L = {
  color: "orange",
  pieceShape: [
    [0,0,0,1],
    [0,1,1,1]
  ]
};
const O = {
  color: "yellow",
  pieceShape: [
    [0,1,1,0],
    [0,1,1,0]
  ]
};
const S = {
  color: "green",
  pieceShape: [
    [0,1,1,0],
    [1,1,0,0]
  ]
};
const T = {
  color: "purple",
  pieceShape: [
    [0,1,0,0],
    [1,1,1,0]
  ]
};
const Z = {
  color: "red",
pieceShape: [
    [0,1,1,0],
    [0,0,1,1]
 ]
};
function CreateSpawn(columns){
  spawn = []
  for (var i = 1; i <= columns; i++){
    spawn.push(i)
  }
  spawncut = (columns-4)/2
  spawn = spawn.slice(spawncut,-spawncut)
  return spawn
}
const tiles = document.getElementsByClassName("tile");
