class Tile {
    constructor(row, column) {
        this.row = row;
        this.column = column;
        this.id = `r${row}c${column}`;
    }
}
function createBoard(height, width, board) {
  if (height>=4){
    if (width>=3){
      document.getElementById("board").innerHTML="";
    for (var i = 1; i <= height; i++) {
        var row = "";
        for (var j = 1; j <= width; j++) {
            var tile = new Tile(i, j);
            row += "<div id=\"".concat(tile.id, "\" class=\"tile r").concat(tile.row, " c").concat(tile.column, "\"></div>");
        }
        board.innerHTML += "<div id=\"r".concat(i, "\" class=\"row\">").concat(row, "</div>");
    }
  document.getElementById("board").style.minWidth= (width*30)+"px";
  document.getElementById("definerows").value = "";
  document.getElementById("definecolumns").value = "";
 window.spawnArray = CreateSpawn(width);
    }
  }
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
const L = {
  color: "Orange",
  pieceShape: [
    [1,0,0,0],
    [1,1,1,0]
  ]
};
const J = {
  color: "blue",
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
const Z = {
  color: "red",
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
const S = {
  color: "green",
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
  console.log(spawn)
  return spawn;
}
const tiles = document.getElementsByClassName("tile");

function CreatePiece(piece){
for (let n=1; n<=2; n++){
  for (let i = spawnArray[0]; i<= spawnArray[3]; i++){
  document.getElementById("r"+n+"c"+i).innerHTML = piece.pieceShape[n-1][spawnArray[3]-i]
if (document.getElementById("r"+n+"c"+i).innerHTML == 1){ document.getElementById("r"+n+"c"+i).style.backgroundColor = piece.color
document.getElementById("r"+n+"c"+i).style.color = piece.color
}else{ document.getElementById("r"+n+"c"+i).style.backgroundColor = "white"
document.getElementById("r"+n+"c"+i).style.color = "white"
}
  }
    }
  document.getElementById("definepiece").value = ''
}