class Tile {
    constructor(row, column) {
        this.row = row;
        this.column = column;
        this.id = `r${row}c${column}`;
        this.state = "unfilled";
        this.color = null;
    }
}
function createBoard(width, height) {
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
const I = { color: "cyan" };
const J = { color: "blue" };
const L = { color: "orange" };
const O = { color: "yellow" };
const S = { color: "green" };
const T = { color: "purple" };
const Z = { color: "red" };
document.getElementById("board").innerHTML = createBoard(4, 3);
const tiles = document.getElementsByClassName("tile");
