var Tile = (function () {
    function Tile(row, column) {
        this.row = row;
        this.column = column;
        this.id = "r".concat(row, "c").concat(column);
        this.state = "unfilled";
        this.color = null;
    }
    return Tile;
}());
function createBoard(width, height) {
    var board = "";
    for (var row = 1; row <= width; row++) {
        for (var column = 1; column <= height; column++) {
            var tile = new Tile(row, column);
            board += "<div id=\"".concat(tile.id, "\" class=\"tile r").concat(tile.row, " c").concat(tile.column, "\">");
        }
        board += "<br>";
    }
    return board;
}
document.getElementById("board").innerHTML = createBoard(2, 2);
