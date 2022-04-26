var Tile = /** @class */ (function () {
    /**
     * Constructs a new tile
     *
     * @constructor
     *
     * @param {number} row - The row of the tile
     * @param {number} column - The column of the tile
     */
    function Tile(row, column) {
        this.row = row;
        this.column = column;
        this.id = "r".concat(row, "c").concat(column);
        this.filled = false;
        // this.color = null;
    }
    return Tile;
}());
/**
 * Create a tetris board of specified width and height
 *
 * @param {number} width - The width of the board
 * @param {number} height - The height of the board
 * @param {object} board - The element where the board will go
 */
function createBoard(width, height) {
    board = "";
    for (var row = 1; row <= width; row++) {
        for (var column = 1; column <= height; column++) {
            var tile = new Tile(row, column);
            board += "<div id=\"".concat(tile.id, "\" class=\"tile r").concat(tile.row, " c").concat(tile.column, "\">");
        }
        board += "<br>";
    }
    return board;
}
// Main code
document.getElementById("board").innerHTML = createBoard(2, 2);
