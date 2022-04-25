class Tile {
    /**
     * Creates instance of Tile
     * 
     * @param {number} row The row of a tile
     * @param {number} column The column of a board
     */
    constructor(row, column) {
        this.x = row;
        this.column = column;
        this.id = `r${row}c${column}`;
    }
}

/**
 * Create a tetris board of specified width and height
 * 
 * @param {number} width The width of the board
 * @param {number} height The height of the board
 * @param {object} board The element where the board will go
 */
function createBoard(width, height, board) {
    for (let row = 0; row < width; row++) {
        for (let column = 0; column < height; column++) {
            const tile = new Tile(row, column);
            board.innerHTML += `<div id="${tile.id}" class="tile r${tile.row} c${tile.column}"`;
        }

        board.innerHTML += "<br>"
    }
}

// Main code

createBoard(2, 2, document.getElementById("board"));