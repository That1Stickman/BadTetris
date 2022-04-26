class Tile {
    constructor(row, column) {
        this.row = row;
        this.column = column;
        this.id = `r${row}c${column}`;
        this.state = "unfilled";
        this.color = null;
    }
}
let boardArray = [];
function createBoard(width, height) {
    let board = "";
    for (let i = 1; i <= width; i++) {
        let row = "";
        let rowArray = [];
        for (let j = 1; j <= height; j++) {
            const tile = new Tile(i, j);
            rowArray.push(tile);
            row += `<div id="${tile.id}" class="tile r${tile.row} c${tile.column}"></div>`;
        }
        board += `<div id="r${i}" class="row">${row}</div>`;
        boardArray.push(rowArray);
    }
    return board;
}
const I = { color: "cyan" };
const J = { color: "blue" };
const L = { color: "orange" };
const O = { color: "yellow" };
const S = { color: "green" };
const Z = { color: "red" };
document.getElementById("board").innerHTML = createBoard(20, 6);
document.getElementById("r1c1").style.backgroundColor = I.color;
