/* Name: Tashia Boddu
Email: Tashia_Boddu@student.uml.edu
This project was created on December 10th, 2022
to implement the game scrabble for GUI 1 */

var Z_INDEX_DIALOG = 100;
var Z_INDEX_TILE_ON_DRAG = 99;

var scrabbleTiles = [];
scrabbleTiles["A"] = { "value": 1, "original-distribution": 9, "number-remaining": 9, "image": "images/Scrabble_Tiles/Scrabble_Tile_A.jpg" };
scrabbleTiles["B"] = { "value": 3, "original-distribution": 2, "number-remaining": 2, "image": "images/Scrabble_Tiles/Scrabble_Tile_B.jpg" };
scrabbleTiles["C"] = { "value": 3, "original-distribution": 2, "number-remaining": 2, "image": "images/Scrabble_Tiles/Scrabble_Tile_C.jpg" };
scrabbleTiles["D"] = { "value": 2, "original-distribution": 4, "number-remaining": 4, "image": "images/Scrabble_Tiles/Scrabble_Tile_D.jpg" };
scrabbleTiles["E"] = { "value": 1, "original-distribution": 12, "number-remaining": 12, "image": "images/Scrabble_Tiles/Scrabble_Tile_E.jpg" };
scrabbleTiles["F"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "images/Scrabble_Tiles/Scrabble_Tile_F.jpg" };
scrabbleTiles["G"] = { "value": 2, "original-distribution": 3, "number-remaining": 3, "image": "images/Scrabble_Tiles/Scrabble_Tile_G.jpg" };
scrabbleTiles["H"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "images/Scrabble_Tiles/Scrabble_Tile_H.jpg" };
scrabbleTiles["I"] = { "value": 1, "original-distribution": 9, "number-remaining": 9, "image": "images/Scrabble_Tiles/Scrabble_Tile_I.jpg" };
scrabbleTiles["J"] = { "value": 8, "original-distribution": 1, "number-remaining": 1, "image": "images/Scrabble_Tiles/Scrabble_Tile_J.jpg" };
scrabbleTiles["K"] = { "value": 5, "original-distribution": 1, "number-remaining": 1, "image": "images/Scrabble_Tiles/Scrabble_Tile_K.jpg" };
scrabbleTiles["L"] = { "value": 1, "original-distribution": 4, "number-remaining": 4, "image": "images/Scrabble_Tiles/Scrabble_Tile_L.jpg" };
scrabbleTiles["M"] = { "value": 3, "original-distribution": 2, "number-remaining": 2, "image": "images/Scrabble_Tiles/Scrabble_Tile_M.jpg" };
scrabbleTiles["N"] = { "value": 1, "original-distribution": 6, "number-remaining": 6, "image": "images/Scrabble_Tiles/Scrabble_Tile_N.jpg" };
scrabbleTiles["O"] = { "value": 1, "original-distribution": 8, "number-remaining": 8, "image": "images/Scrabble_Tiles/Scrabble_Tile_O.jpg" };
scrabbleTiles["P"] = { "value": 3, "original-distribution": 2, "number-remaining": 2, "image": "images/Scrabble_Tiles/Scrabble_Tile_P.jpg" };
scrabbleTiles["Q"] = { "value": 10, "original-distribution": 1, "number-remaining": 1, "image": "images/Scrabble_Tiles/Scrabble_Tile_Q.jpg" };
scrabbleTiles["R"] = { "value": 1, "original-distribution": 6, "number-remaining": 6, "image": "images/Scrabble_Tiles/Scrabble_Tile_R.jpg" };
scrabbleTiles["S"] = { "value": 1, "original-distribution": 4, "number-remaining": 4, "image": "images/Scrabble_Tiles/Scrabble_Tile_S.jpg" };
scrabbleTiles["T"] = { "value": 1, "original-distribution": 6, "number-remaining": 6, "image": "images/Scrabble_Tiles/Scrabble_Tile_T.jpg" };
scrabbleTiles["U"] = { "value": 1, "original-distribution": 4, "number-remaining": 4, "image": "images/Scrabble_Tiles/Scrabble_Tile_U.jpg" };
scrabbleTiles["V"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "images/Scrabble_Tiles/Scrabble_Tile_V.jpg" };
scrabbleTiles["W"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "images/Scrabble_Tiles/Scrabble_Tile_W.jpg" };
scrabbleTiles["X"] = { "value": 8, "original-distribution": 1, "number-remaining": 1, "image": "images/Scrabble_Tiles/Scrabble_Tile_X.jpg" };
scrabbleTiles["Y"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "images/Scrabble_Tiles/Scrabble_Tile_Y.jpg" };
scrabbleTiles["Z"] = { "value": 10, "original-distribution": 1, "number-remaining": 1, "image": "images/Scrabble_Tiles/Scrabble_Tile_Z.jpg" };
scrabbleTiles["_"] = { "value": 0, "original-distribution": 2, "number-remaining": 2, "image": "images/Scrabble_Tiles/Scrabble_Tile_Blank.jpg" };

var board = {}
board.slots = [];
board.slots[0] = [];
board.slots[0][0] = { "multLetter": 1, "multWord": 1, "image": "./images/blankSq.png"};
board.slots[0][1] = { "multLetter": 1, "multWord": 2, "image": "./images/doubleWrd.png" };
board.slots[0][2] = { "multLetter": 1, "multWord": 1, "image": "./images/blankSq.png" };
board.slots[0][3] = { "multLetter": 1, "multWord": 1, "image": "./images/blankSq.png" };
board.slots[0][4] = { "multLetter": 1, "multWord": 1, "image": "./images/doubleWrd.png" };
board.slots[0][5] = { "multLetter": 1, "multWord": 2, "image": "./images/blankSq.png" };
board.slots[0][6] = { "multLetter": 1, "multWord": 1, "image": "./images/blankSq.png" };

board.rowCount = Object.keys(board.slots).length;
board.columnCount = Object.keys(board.slots[0]).length;
// Keep track of current scores
var scores = { "score": 0, "totalScore": 0 };

// Generate tiles on rack
function createTiles() {
  const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let tiles = 0;

  for (let i = 0; i < 7; i++) {
    let result = a.charAt(Math.floor(Math.random() * a.length));
    $('#rack').append(
      `<img class="letterTile" letter="${result}" id="tile-${tiles}"
       src="./images/Scrabble_Tiles/Scrabble_Tile_${result}.jpg" width= "75" height = "75">
      `)
  }
}

// Refresh page to restart board
function startOver() {
  window.location.reload();
}

// Generates board
function createBoard() {
  var row, col, bgImagePath, newSlot;
  var BG_IMAGE_WIDTH = 81, BG_IMAGE_HEIGHT = 87, SLOT_MARGIN = 1, SLOT_BORDER_WIDTH = 1;

  $("#Board").css("height", (BG_IMAGE_HEIGHT + 2 * (SLOT_MARGIN + SLOT_BORDER_WIDTH)) * board.rowCount);
  $("#Board").css("width", (BG_IMAGE_WIDTH + 2 * (SLOT_MARGIN + SLOT_BORDER_WIDTH)) * board.columnCount);

  for (row = 0; row < board.rowCount; ++row) {
    for (col = 0; col < board.columnCount; ++col) {
      bgImagePath = board.slots[row][col].image;
      newSlot = $("<div class=\"boardSlot\" row=\"" + row + "\" col=\"" + col + "\" style=\"background-image: url(" + bgImagePath + ")\" />");
      $("#Board").append(newSlot);
      newSlot.css({ "width": BG_IMAGE_WIDTH, "height": BG_IMAGE_HEIGHT, "margin": SLOT_MARGIN, "border-width": SLOT_BORDER_WIDTH });
    }
  }
}

function findTiles(tiles) {
  for (let row = 0; row < board.rowCount; ++row) {
    for (let col = 0; col < board.columnCount; ++col) {
      if (board.slots[row][col].tiles=== tiles) {
        return [row, col];
      }
    }
  }
  return false;
}

// Adds tiles to board data-structure
function addTiles(tile, row, col, letter,) {
  for (let i = 0; i < board.rowCount; ++i) {
    for (let j = 0; j < board.columnCount; ++j) {
      if (board.slots[i][j].tile === tile) {
        delete board.slots[i][j].tile;
        delete board.slots[i][j].letter;
      }
    }
  }
  board.slots[row][col].letter = letter;
  board.slots[row][col].tileId = tile;
}

// Delete tiles
function deleteTile(row, col) {
  delete board.slots[row][col].tile;
  delete board.slots[row][col].letter;
}

// Calculate score of tiles
function calculateScore() {
  let letter, letterVal, multWord = 1, score = 0;
  for (let row = 0; row < board.rowCount; ++row) {
    for (let col = 0; col < board.columnCount; ++col) {
      letter = board.slots[row][col].letter;
        if (letter) {
          letterVal = scrabbleTiles[letter].value;
          score += letterVal * board.slots[row][col].multLetter;
          multWord *= board.slots[row][col].multWord;
        }
    }
  }
  score *= multWord;
  return score;
}

// Update
function update() {
  var score = calculateScore();
  $("#score").html(score.score + " (+<span id='score'>" + score + "</span>)");
  $("#totalScore").html(score.totalScore);
}

function getLetter(row, col) {
  return board.slots[row][col].letter;
}

// Get the current word
let currentWord = [];
function getCurrentWord() {
  for (let i = 0; i < board.rowCount; i++) {
    for (let j = 0; j < board.columnCount; j++) {
      let currentLetter = board.slots[i][j].letter;
      if (currentLetter) {
        currentWord.push(currentLetter);
      }
    }
  }
  $("#word").html(currentWord)
}

$(window).load(function () {
  createBoard();
  createTiles();

  // On click, call restart func
  $("#startOver").click(function () {
    startOver();
  });

  $("#nextWord").click(function () {
    nextWord();
  });

  // Letter tiles are draggable
  $(".letterTile").draggable();
  // Letter tiles are revertable
  $(".letterTile").draggable({ revert: "invalid" });

  // Make the board slots droppable.
  $(".boardSlot").droppable({
    accept: ".letterTile",
    activeClass: "dragHighlight",
    hoverClass: "hoverHighlight",
    drop: function (event, ui) {
      let row, col, letter, tileId;
      ui.draggable.removeClass("letterTileOnRack");
      ui.draggable.addClass("letterTileOnBoard");

      row = $(this).attr("row");
      col = $(this).attr("col");

      letter = ui.draggable.attr("letter");
      tile = ui.draggable.attr("id");

      $(ui.draggable).css("top", "");
      $(ui.draggable).css("left", "");
      $(this).append(ui.draggable);

      addTiles(tile, letter, row, col);
      getCurrentWord();
    }
  });

  $("#rack").droppable({
    activeClass: "dragHighlight",
    hoverClass: "hoverHighlight",
    tolerance: "touch",
    drop: function (event, ui) {
      var tileId, pos;
      ui.draggable.removeClass("letterTileOnBoard");
      ui.draggable.addClass("letterTileOnRack");

      if ($(ui.draggable).hasClass("blankTile")) {
        $(ui.draggable).attr("src", scrabbleTiles["_"]["image"]);
      }

      tile = ui.draggable.attr("id");
      pos = findTiles(tile);
      if (pos) {
        deleteTile(pos[0], pos[1]);  // pos[0]: row, pos[1]: column
        $("#rack").append(ui.draggable);
        ui.draggable.css({ "position": "relative", "top": "", "left": "" });
        update();
      } else {
        ui.draggable.draggable("option", "revert", true);
      }
    }
  });
});
