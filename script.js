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
    for (var i = 1; i <= width; i++) {
        var row = "";
        for (var j = 1; j <= height; j++) {
            var tile = new Tile(i, j);
            row += "<div id=\"".concat(tile.id, "\" class=\"tile r").concat(tile.row, " c").concat(tile.column, "\"></div>");
        }
        board += "<div id=\"r".concat(i, "\" class=\"row\">").concat(row, "</div>");
    }
    return board;
}
document.getElementById("board").innerHTML = createBoard(4, 3);
