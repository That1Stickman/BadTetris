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

// Main code

const t = new Tile(1, 1);
console.log(t.id);