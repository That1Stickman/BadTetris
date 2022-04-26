class Tile {
  filled: boolean;
  color;

  row: number;
  column: number;
  id: string;

  /**
   * Constructs a new tile
   * 
   * @constructor
   * 
   * @param {number} row - The row of the tile
   * @param {number} column - The column of the tile
   */
  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
    this.id = `r${row}c${column}`;
  }
}

/**
 * Create a tetris board of specified width and height
 * 
 * @param {number} width - The width of the board
 * @param {number} height - The height of the board
 * @param {object} board - The element where the board will go
 */
function createBoard(width: number, height: number, board) {
  for (let row = 0; row < width; row++) {
    for (let column = 0; column < height; column++) {
      const tile = new Tile(row, column);
      board.innerHTML += `<div id="${tile.id}" class="tile r${tile.row} c${tile.column}">`;
    }

    board.innerHTML += "<br>";
  }
}

// Main code

createBoard(2, 2, document.getElementById("board"));