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
      window.spawnArray = CreateSpawn(width);
      window.width = width
      window.height = height
      CreatePiece(possiblePieces[Math.floor(Math.random() * possiblePieces.length)])
    }
  }
}

document.getElementById("10-by-20").addEventListener('click', function() {
  createBoard(10, 20);
});
document.getElementById("30-by-20").addEventListener('click', function() {
  createBoard(30, 20);
});
document.getElementById("10-by-10").addEventListener('click', function() {
  createBoard(10, 10);
});