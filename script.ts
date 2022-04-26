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
 * @returns - HTML elements of board
 */
function createBoard(width: number, height: number) {
  let board = "";

  for (let row = 1; row <= width; row++) {
    for (let column = 1; column <= height; column++) {
      const tile = new Tile(row, column);
      board += `<div id="${tile.id}" class="tile r${tile.row} c${tile.column}">`;
    }

    board += "<br>";
  }

  return board;
}

// Main code

document.getElementById("board").innerHTML = createBoard(2, 2);