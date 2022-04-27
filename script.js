class Tile {
    constructor(row, column) {
        this.row = row;
        this.column = column;
        this.id = `r${row}c${column}`;
        this.state = "unfilled";
        this.color = null;
    }
}
function createBoard(width, height, board) {
  if (width>=4){
    if (height>=3){
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
                }
    }
  
  
}
const I = { color: "cyan" };
const J = { color: "blue" };
const L = { color: "orange" };
const O = { color: "yellow" };
const S = { color: "green" };
const T = { color: "purple" };
const Z = { color: "red" };
const tiles = document.getElementsByClassName("tile");
