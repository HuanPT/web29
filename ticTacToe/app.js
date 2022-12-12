const $btn = $(".btn");
const $board = $(".board-table");
const $turn = $(".turn");

let r = $("#rows");
let c = $("#cells");

// const row = 10;
// const cell = 10;

let turn = "X";
let winner;

function switchTurn() {
  turn = turn === "X" ? "O" : "X";

  if (turn === "X") $turn.css("color", "red");
  if (turn === "O") $turn.css("color", "blue");
  $turn.text(turn);
}

function handleCellClick(e) {
  if (!winner) {
    if (turn === "X") {
      e.data.target.text(turn).css("color", "red");
    }
    if (turn === "O") {
      e.data.target.text(turn).css("color", "blue");
    }

    switchTurn();
  }
}

function createCell() {
  const $cell = $("<div class='cell' />");
  $cell.one("click", { target: $cell }, handleCellClick);

  return $cell;
}

function createRow(numOfCells) {
  const $row = $("<div class='row' />");

  for (let i = 0; i < numOfCells; i++) {
    $row.append(createCell());
  }

  return $row;
}

function renderBoard(numOfRows, numOfCells) {
  for (let i = 0; i < numOfRows; i++) {
    $board.append(createRow(numOfCells));
  }
}

$btn.one("click", () => {
  const row = r.val();
  const cell = c.val();
  renderBoard(row, cell);
});

// const row = 10;
// const cell = 10;

// $(() => {});
