function listener (e) {
keypress(e)
}
function keypress(e){
    let key = e.key
  if (key == "a" || key == "ArrowLeft") {
    movement(-1);
  }
  if (key == "d" || key == "ArrowRight") {
    movement(1)
  }
  if (key == "w"|| key == " ") {
    currentpiece2 = currentpiece
    while (currentpiece2 == currentpiece) {
      pieceUpdate();
    }
    currentpiece2 = ''
  }
  if (key == "s" || key == "ArrowDown") {
    pieceUpdate();
  }
  if (key == "e" || key == "ArrowUp") {
    rotate(1)
  }
  if (key == "q") {
    rotate(-1)
  }
}
function rotate(value) {
  x = activeTiles[0]
  newspawn = []
  for (n = x.id.match(/[a-zA-Z]+|[0-9]+/g)[1]; n <= x.id.match(/[a-zA-Z]+|[0-9]+/g)[1] + 3; n++) {
    newspawn[n] = []
    for (i = x.id.match(/[a-zA-Z]+|[0-9]+/g)[3]; i <= x.id.match(/[a-zA-Z]+|[0-9]+/g)[3] + 3; i++) {
      try {
        if (currentpiece["Shape" + (currentrotation + value)][n - (n - 1)][i - (i - 1)] == 1 && !(document.getElementById("r" + n + "c" + i).innerHTML == 0 || document.getElementById(sample).innerHTML == 1)) {
          console.log("whoops")
          return true
        }
      }
      catch (err) {
        console.log("whoopsw")
        return true
      }
    }
  }
  for (let x of activeTiles) {
    x.style.backgroundColor = "white"
    x.style.color = "white"
    x.innerHTML = "0"
  }
  activeTiles = []
  for (let x of newspawn) {
    //if()
    document.getElementById(x).innerHTML = 1
    document.getElementById(x).style.backgroundColor = currentpiece.color
    document.getElementById(x).style.color = currentpiece.color
    activeTiles.push(document.getElementById(x))
  }
}
function movement(value) {
  newspawn = []
  for (let x of activeTiles) {
    sample = x.id.match(/[a-zA-Z]+|[0-9]+/g)
    sample[3] = parseInt(sample[3]) + value
    sample = sample.join("")
    newspawn.push(sample)
    try {
      if (!(document.getElementById(sample).innerHTML == 0 || document.getElementById(sample).innerHTML == 1)) {
        return true
      }
    }
    catch (err) {
      return true
    }
  }
  for (let x of activeTiles) {
    x.style.backgroundColor = "white"
    x.style.color = "white"
    x.innerHTML = "0"
  }
  activeTiles = []
  for (let x of newspawn) {
    document.getElementById(x).innerHTML = 1
    document.getElementById(x).style.backgroundColor = currentpiece.color
    document.getElementById(x).style.color = currentpiece.color
    activeTiles.push(document.getElementById(x))
  }
}
function pieceUpdate() {
  newspawn = []
  for (let x of activeTiles) {
    sample = x.id.match(/[a-zA-Z]+|[0-9]+/g)
    sample[1] = parseInt(sample[1]) + 1
    sample = sample.join("")
    newspawn.push(sample)
    try {
      if (!(document.getElementById(sample).innerHTML == 0 || document.getElementById(sample).innerHTML == 1)) {
        for (let x of activeTiles) {
          x.innerHTML = 2
        }
        newspawn = []
        activeTiles = []
        CreatePiece(possiblePieces[Math.floor(Math.random() * possiblePieces.length)])
        return true
      }
    }
    catch (err) {
      for (let x of activeTiles) {
        x.innerHTML = 2
      }
      newspawn = []
      activeTiles = []
      CreatePiece(possiblePieces[Math.floor(Math.random() * possiblePieces.length)])
      return true
    }
  }
  for (let x of activeTiles) {
    x.style.backgroundColor = "white"
    x.style.color = "white"
    x.innerHTML = "0"
  }
  activeTiles = []
  for (let x of newspawn) {
    document.getElementById(x).innerHTML = 1
    document.getElementById(x).style.backgroundColor = currentpiece.color
    document.getElementById(x).style.color = currentpiece.color
    activeTiles.push(document.getElementById(x))
  }
}
function CreateSpawn(columns) {
  spawn = []
  for (let i = 1; i <= columns; i++) {
    spawn.push(i)
  }
  spawncut = (columns - 4) / 2
  spawn = spawn.slice(spawncut, -spawncut)
  return spawn;
}
function CreatePiece(piece) {
  for (let n = 1; n <= 2; n++) {
    for (let i = spawnArray[0]; i <= spawnArray[3]; i++) {
      if (document.getElementById("r" + n + "c" + i).innerHTML <= 1) {
        document.getElementById("r" + n + "c" + i).innerHTML = piece.Shape1[n - 1][spawnArray[3] - i]
        if (document.getElementById("r" + n + "c" + i).innerHTML == 1) {
          document.getElementById("r" + n + "c" + i).style.backgroundColor = piece.color
          document.getElementById("r" + n + "c" + i).style.color = piece.color
          activeTiles.push(document.getElementById("r" + n + "c" + i))
        } else {
          document.getElementById("r" + n + "c" + i).style.backgroundColor = "white"
          document.getElementById("r" + n + "c" + i).style.color = "white"
        }
      }else{
        activeTiles = []
        document.removeEventListener("keydown", listener)
        clearInterval(Interval)
        Interval = null
        console.log("Game Over!")
        document.getElementById("ten-by-twenty").style.display = 'block';
  document.getElementById("twenty-by-thirty").style.display = 'block';
  document.getElementById("ten-by-ten").style.display = 'block';
  document.getElementById("custom").style.display = 'block';
    }
    currentpiece = piece
    currentrotation = 1
    possiblePieces.splice(possiblePieces.indexOf(piece), 1)
    if (possiblePieces.toString() == '') {
      possiblePieces = [I, L, J, O, Z, T, S]
    }
  }
}}
function ClearRow() {
  storedrows = []
  for (n = 1; n <= height; n++) {
    rowchecker = []
    fullrow = []
    for (i = 1; i <= width; i++) {
      rowchecker.push(document.getElementById("r" + n + "c" + i).innerHTML)
      fullrow.push("2")
      if (rowchecker.toString() == fullrow.toString() && rowchecker.length == width) {
        for (x of rowchecker) {
          document.getElementById("r" + n + "c" + i).style.backgroundColor = "white"
          document.getElementById("r" + n + "c" + i).style.color = "white"
          document.getElementById("r" + n + "c" + i).innerHTML = "0"
        }
      }
      // for(x of )
    }
    storedrows.push(rowchecker)
    if (storedrows[n - 1].toString == fullrow.toString) {
      storedrows.pop()
      newline = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      storedrows.unshift(newline)
    }
  }
}
//const spectile = document.getElementById("r"+n+"c"+i)