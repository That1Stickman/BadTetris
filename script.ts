type Color = "cyan" | "yellow" | "purple" | "green" | "red" | "blue" | "orange";

class Tile {
  row: number;
  column: number;
  id: string;

  state: "filled" | "unfilled" | "active";
  color: Color;

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
 * @returns {string} The HTML of the board
 */
function createBoard(width: number, height: number) {
  let board = "";
  for (let i = 1; i <= width; i++) {
    let row = "";
    for (let j = 1; j <= height; j++) {
      const tile = new Tile(i, j);
      row += `<div id="${tile.id}" class="tile r${tile.row} c${tile.column}"></div>`;
    }
    board += `<div id="r${i}" class="row">${row}</div>`;
  }
  return board;
}

// Pieces
interface Tetromino {
  color: Color;
}

const I: Tetromino = {color: "cyan"}
const J: Tetromino = {color: "blue"}
const L: Tetromino = {color: "orange"}
const O: Tetromino = {color: "yellow"}
const S: Tetromino = {color: "green"}
const T: Tetromino = {color: "purple"}
const Z: Tetromino = {color: "red"}

// Main code
document.getElementById("board").innerHTML = createBoard(4, 3);
const tiles: HTMLCollection = document.getElementsByClassName("tile");