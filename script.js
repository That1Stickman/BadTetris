let gamespeed = 500
var Interval
var currentpiece = ''
const tiles = document.getElementsByClassName("tile");
var activeTiles= []
class Tile {
    constructor(row, column) {
        this.row = row;
        this.column = column;
        this.id = `r${row}c${column}`;
    }
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
const possiblePieces = [I,L,J,O,Z,T,S]
document.addEventListener("keydown", function(e){
    var key = e.key
    if(key == "a"){
      movement(-1);
    }else if (key=="d"){
      movement(1)
    }else if (key =="w"){
     for(i=1; i<=height; i++)
       pieceUpdate();
    }else if (key =="s"){
       pieceUpdate();
    }
  })
function movement(value){
  newspawn = []
  for (let x of activeTiles){
      sample = x.id.match(/[a-zA-Z]+|[0-9]+/g)
      sample[3] = parseInt(sample[3])+value
      sample = sample.join("")
     newspawn.push(sample)
    try{if(!(document.getElementById(sample).innerHTML == 0 ||document.getElementById(sample).innerHTML == 1)){
      return true
    }
       }
    catch(err){
      return true
    }
  }
  for (let x of activeTiles){
   x.style.backgroundColor = "white"
   x.style.color = "white"
   x.innerHTML = "0"
  }
  activeTiles = []
  for(let x of newspawn){
  document.getElementById(x).innerHTML=1
  document.getElementById(x).style.backgroundColor = currentpiece.color
  document.getElementById(x).style.color = currentpiece.color
  activeTiles.push(document.getElementById(x))
  }
}
function createBoard(height, width) {
  if (height>=3){
    if (width>=6){
      document.getElementById("board").innerHTML="";
    for (var i = 1; i <= height; i++) {
        var row = "";
        for (var j = 1; j <= width; j++) {
            var tile = new Tile(i, j);
            row += "<div id=\"".concat(tile.id, "\" class=\"tile r").concat(tile.row, " c").concat(tile.column, "\">0</div>");
        }
        board.innerHTML += "<div id=\"r".concat(i, "\" class=\"row\">").concat(row, "</div>");
    }
  document.getElementById("board").style.minWidth= (width*30)+"px";
  document.getElementById("definerows").value = "";
  document.getElementById("definecolumns").value = "";
 window.spawnArray = CreateSpawn(width);
 window.width = width
 window.height = height
    }
  }
}
function pieceUpdate(){
  newspawn = []
  for (let x of activeTiles){
      sample = x.id.match(/[a-zA-Z]+|[0-9]+/g)
      sample[1] = parseInt(sample[1])+1
      sample = sample.join("")
     newspawn.push(sample)
    try{if(!(document.getElementById(sample).innerHTML == 0 ||document.getElementById(sample).innerHTML == 1)){
      for (let x of activeTiles){
        x.innerHTML = 2
      }
      newspawn = []
      activeTiles = []
      window.clearInterval(Interval)
      Interval = null
      return true
    }
       }
    catch(err){
      for (let x of activeTiles){
        x.innerHTML = 2
      }
      newspawn = []
      activeTiles = []
      window.clearInterval(Interval)
      Interval = null
      return true
    }
  }
  for (let x of activeTiles){
   x.style.backgroundColor = "white"
   x.style.color = "white"
   x.innerHTML = "0"
  }
  activeTiles = []
  for(let x of newspawn){
  document.getElementById(x).innerHTML=1
  document.getElementById(x).style.backgroundColor = currentpiece.color
  document.getElementById(x).style.color = currentpiece.color
  activeTiles.push(document.getElementById(x))
  }
}
function CreateSpawn(columns){
  spawn = []
  for (var i = 1; i <= columns; i++){
    spawn.push(i)
  }
  spawncut = (columns-4)/2
  spawn = spawn.slice(spawncut,-spawncut)
  return spawn;
}
function CreatePiece(piece, origin){
for (let n=1; n<=2; n++){
  for (let i = origin[0]; i<= origin[3]; i++){
  document.getElementById("r"+n+"c"+i).innerHTML = piece.pieceShape[n-1][origin[3]-i]
if (document.getElementById("r"+n+"c"+i).innerHTML == 1){ document.getElementById("r"+n+"c"+i).style.backgroundColor = piece.color
document.getElementById("r"+n+"c"+i).style.color = piece.color
activeTiles.push(document.getElementById("r"+n+"c"+i))
}else{ document.getElementById("r"+n+"c"+i).style.backgroundColor = "white"
document.getElementById("r"+n+"c"+i).style.color = "white"
}}}
  document.getElementById("definepiece").value = ''
  currentpiece = piece
  Interval = window.setInterval(pieceUpdate, gamespeed)
}
function ClearRow(){
  for(n=1; n<=width; n++){
      rowchecker = []
      fullrow = []
    for(i=1; i<=height; i++){
      rowchecker.push(document.getElementById("r"+n+"c"+i).innerHTML)
      fullrow.push(2)
    }
    if(rowchecker == fullrow){
      console.log("success!")
    }
  }
}