type color = "cyan" | "yellow" | "purple" | "green" | "red" | "blue" | "orange";

class Tile {
  row: number;
  column: number;
  id: string;

  state: "filled" | "unfilled" | "active";
  color: color;

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

    this.state = "unfilled";
    this.color = null;
  }
}

/**
 * Create and return a tetris board of specified length and width
 * 
 * @param {number} width - The width of the board
 * @param {number} height - The height of the board
 * @param {HTMLElement} board - The HTML element where the board will go
 */
function createBoard(width: number, height: number, board: HTMLElement) {
  for (let i = 1; i <= width; i++) {
    let row = "";
    for (let j = 1; j <= height; j++) {
      const tile = new Tile(i, j);
      row += `<div id="${tile.id}" class="tile r${tile.row} c${tile.column}"></div>`;
    }
    board.innerHTML += `<div id="r${i}" class="row">${row}</div>`;
  }
}

// Main code

createBoard(3, 3, document.getElementById("board"));