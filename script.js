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
        this.id = `${row}${column}`;
    }
}

function createBoard(width, length) {
    for (let row = 0; row < width; row++) {
        for (let column = 0; column < width; column++) {
            
        }
    }
}

// Main code