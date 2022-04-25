/** @class Class representing a tile */
class Tile {
    /**
     * 
     * @param {number} x The x value of a tile
     * @param {number} y The y value of a board
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.id = `${x + y}`;
    }
}

// Main code