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
    currentpiece2 = piececount
    while (currentpiece2 == piececount) {
      pieceUpdate();
    }
    scorestuff = document.getElementById("score").innerHTML.split(" ")
        scorestuff[1] = parseInt(scorestuff[1]) + 10
        document.getElementById("score").innerHTML = scorestuff.join(" ")
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
  g = currentrotation + value
  if(g == 0){
    g = 4
  }else if (g == 5){
    g = 1
  }
  newspawn = []
  thing = -1
  for (n = x.id.match(/[a-zA-Z]+|[0-9]+/g)[1]; n <= parseInt(x.id.match(/[a-zA-Z]+|[0-9]+/g)[1]) + 3; n++) {
    thing += 1
    thing2 = -1
    newspawn.push([])
    for (i = x.id.match(/[a-zA-Z]+|[0-9]+/g)[3]; i <= parseInt(x.id.match(/[a-zA-Z]+|[0-9]+/g)[3]) + 3; i++) {
      thing2 += 1
      try {
        if (currentpiece["Shape" + g][thing][thing2] == 1 && document.getElementById("r" + n + "c" + i).innerHTML >= 2) {
          return true
        }
      }
      catch (err) {
        return true
      }
      newspawn[thing].push("r"+n+"c"+i)
    }
  }
  for (let x of activeTiles) {
    x.style.backgroundColor = "white"
    x.style.color = "white"
    x.innerHTML = "0"
  }
  activeTiles = []
  currentrotation = g
  for (n=0; n<=3; n++) {
  for(i = 0; i<=3; i++){
    if(currentpiece["Shape" + g][n][i] == 1){
    document.getElementById(newspawn[n][i]).innerHTML = 1
    document.getElementById(newspawn[n][i]).style.backgroundColor = currentpiece.color
    document.getElementById(newspawn[n][i]).style.color = currentpiece.color
    activeTiles.push(document.getElementById(newspawn[n][i]))}}
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
        scorestuff = document.getElementById("score").innerHTML.split(" ")
        scorestuff[1] = parseInt(scorestuff[1]) + 10
        document.getElementById("score").innerHTML = scorestuff.join(" ")
        newspawn = []
        activeTiles = []
        ClearRow()
       ClearRow()
      ClearRow()
        ClearRow()
        CreatePiece(possiblePieces[piececount])
        return true
      }
    }
    catch (err) {
      for (let x of activeTiles) {
        x.innerHTML = 2
      }
      newspawn = []
      activeTiles = []
      ClearRow()
       CreatePiece(possiblePieces[piececount])
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
    g = -1
    for (let i = spawnArray[0]; i <= spawnArray[3]; i++) {
      g +=1
      if (document.getElementById("r" + n + "c" + i).innerHTML <= 1) {
        document.getElementById("r" + n + "c" + i).innerHTML = piece.Shape1[n - 1][g]
        if (document.getElementById("r" + n + "c" + i).innerHTML == 1) {
          document.getElementById("r" + n + "c" + i).style.backgroundColor = piece.color
          document.getElementById("r" + n + "c" + i).style.color = piece.color
          activeTiles.push(document.getElementById("r" + n + "c" + i))
        } else {
          document.getElementById("r" + n + "c" + i).style.backgroundColor = "white"
          document.getElementById("r" + n + "c" + i).style.color = "white"
        }
        currentpiece = piece
    currentrotation = 1
      }else{
        document.removeEventListener("keydown", listener)
        clearInterval(Interval)
        Interval = null
        piececount = 0
        document.getElementById("ten-by-twenty").style.display = 'block';
  document.getElementById("twenty-by-thirty").style.display = 'block';
  document.getElementById("ten-by-ten").style.display = 'block';
  document.getElementById("custom").style.display = 'block';
    }
  }
}piececount += 1
        if(piececount > 6){
          piececount = 0
          randpiece()
        }}
function ClearRow() {
  for (n = height; n >= 1; n--) {
    rowchecker = []
    rowchecker2 = []
    fullrow = []
    for (i = 1; i <= width; i++) {
      rowchecker.push(document.getElementById("r" + n + "c" + i).innerHTML)
      rowchecker2.push(document.getElementById("r" + n + "c" + i))
      fullrow.push("2")
      if (rowchecker.toString() == fullrow.toString() && rowchecker.length == width){
        document.getElementById("r" + n).remove()
        for (let x of tiles) {
    sample = x.id.match(/[a-zA-Z]+|[0-9]+/g)
    if(sample[1]<= n){
    sample[1] = parseInt(sample[1]) + 1
    sample = sample.join("")
    x.id = sample}}
        for (let x of document.getElementsByClassName("row")) {
    sample = x.id.match(/[a-zA-Z]+|[0-9]+/g)
    if(sample[1]<= n){
    sample[1] = parseInt(sample[1]) + 1
    sample = sample.join("")
    x.id = sample}}
        let row = "";
        for (let j = 1; j <= width; j++) {
          let tile = new Tile(1, j);
          row += "<div id=\"".concat(tile.id, "\" class=\"tile r").concat(tile.row, " c").concat(tile.column, "\">0</div>");
        }
        board.insertAdjacentHTML("afterbegin","<div id=\"r".concat(1, "\" class=\"row\">").concat(row, "</div>"));
        scorestuff = document.getElementById("score").innerHTML.split(" ")
        scorestuff[1] = parseInt(scorestuff[1]) + width*10
        document.getElementById("score").innerHTML = scorestuff.join(" ")
        level += 1
        if(level == levelcap && gamespeed >= 150){
          gamespeed -= 40 + (levelcap*5)
          level = 0
          levelcap += 1
          clearInterval(Interval)
        Interval = null
          Interval = window.setInterval(pieceUpdate, gamespeed)
          console.log(gamespeed)
        }
        n = height
      }}}}
function randpiece(){
  let currentIndex = possiblePieces.length,  randomIndex
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    [possiblePieces[currentIndex], possiblePieces[randomIndex]] = [
      possiblePieces[randomIndex], possiblePieces[currentIndex]]
  }
}
/*function gridlines(){
  for (let x of tiles) {
    x.style.border = "none"
  }
  for (let x of activeTiles) {
    sample = x.id.match(/[a-zA-Z]+|[0-9]+/g)[3]
      for (let z of tiles) {
        y =z.id.match(/[a-zA-Z]+|[0-9]+/g)[3]
        if (y = sample){
          x.style.border = "1px solid black"
      }
    }
  }
}*/