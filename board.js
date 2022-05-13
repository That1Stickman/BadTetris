function createBoard(width, height) {
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
     document.addEventListener("keydown", listener) CreatePiece(possiblePieces[Math.floor(Math.random() * possiblePieces.length)])
      Interval = window.setInterval(pieceUpdate, gamespeed)
    }
  }
}

document.getElementById("ten-by-twenty").addEventListener('click', function() {
  createBoard(10, 20);
  document.getElementById("ten-by-twenty").style.display = 'none';
  document.getElementById("twenty-by-thirty").style.display = 'none';
  document.getElementById("ten-by-ten").style.display = 'none';
    document.getElementById("custom").style.display = 'none';
});

document.getElementById("twenty-by-thirty").addEventListener('click', function() {
  createBoard(20, 30);
  document.getElementById("ten-by-twenty").style.display = 'none';
  document.getElementById("twenty-by-thirty").style.display = 'none';
  document.getElementById("ten-by-ten").style.display = 'none';
    document.getElementById("custom").style.display = 'none';
});

document.getElementById("ten-by-ten").addEventListener('click', function() {
  createBoard(10, 10);
  document.getElementById("ten-by-twenty").style.display = 'none';
  document.getElementById("twenty-by-thirty").style.display = 'none';
  document.getElementById("ten-by-ten").style.display = 'none';
  document.getElementById("custom").style.display = 'none';
});

document.getElementById("custom").addEventListener('click', function() {
  createBoard(parseInt(prompt("Width")), parseInt(prompt("Height")));
  document.getElementById("ten-by-twenty").style.display = 'none';
  document.getElementById("twenty-by-thirty").style.display = 'none';
  document.getElementById("ten-by-ten").style.display = 'none';
  document.getElementById("custom").style.display = 'none';
});