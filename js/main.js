/*----- constants -----*/
const COLOR_LOOKUP = {
   // cell values: 0, 1, -1
   '0': 'white',
   '1': 'mediumpurple',
   '-1': 'palevioletred', //hotpink
}

// const WINNING_COMBOS = [
//    [0, 0, 0, 0]
//    [1, 1, 1, 1, 1, 1]
//    [2, 2, 2, 2, 2, 2]
//    [3, 3, 3, 3, 3, 3]
//    [4, 4, 4, 4, 4, 4]
//    [5, 5, 5, 5, 5, 5]
//    [6, 6, 6, 6, 6, 6]
// ];

/*----- app's state (variables) -----*/
// Array of  42 elements... null -> circles available; 1 or -1  for players
let board; // 2D Array wherre the nested arrays represent the columns
let turn; // 1 or -1; 0 for empty cell
let gameStatus; // null -> game in play; 1/-1 player win; 'T' -> tie
// lookup how to keep track of scores. watch RPS  lecture!!!


/*----- cached element references -----*/
// const circleEls = [...document.querySelectorAll('#board > div')];
// const msgEl = document.querySelector('h3');

/*----- event listeners -----*/
// document.getElementById('board').addEventListener('click', handleMove);

/*----- functions -----*/
init();

// initialize state, then  calll render()
function init() {
   // board = new Array(42).fill(null);  professor did it for ttt.. instead he used board array
   board = [
      [0, 0, 0, 0, 0, 0], // column 0
      [0, 0, 0, 0, 0, 0], // column 1
      [0, 0, 0, 0, 0, 0], // column 2
      [0, 0, 0, 0, 0, 0], // column 3
      [0, 0, 0, 0, 0, 0], // column 4
      [0, 0, 0, 0, 0, 0], // column 5
      [0, 0, 0, 0, 0, 0], // column 6
   ];
   turn = 1;
   // gameStatus = null;
   render();
}

// In responce to user interaction (e.g., click)
// We update  ALL impacted state,
// then lastly, call render
// function handleMove(evt) {
//    // Guards
//    if (
//       gameStatus ||
//       !circleEls.includes(evt.target)
//    ) return;
//    const idx = circleEls.indexOf(evt.target);
//    board[idx] = turn;
//    turn *= -1;
//    // TODO: need to update gameStatus!!!
//    // NEED TO FIND OUT HOW TO MOVE THE CIRCLE/PLAYER'S TURN 
//    // TO LAST ITEM IN THE COLUMN!!! MAYBE CHANGE INDEX???
//    gameStatus = getGameStatus();
//    render();
// }

// function getGameStatus()  {

// }


// Render’s job is to transfer/visualize all state to the DOM
function render() {
   // Iterate over the column  arrays
   board.forEach(function(columnArr, columnIdx) {
      columnArr.forEach(function(cellValue, rowIdx) {
         const cellEl = document.getElementById(`c${columnIdx}r${rowIdx}`);
         cellEl.style.backgroundColor = COLOR_LOOKUP[cellValue];
         console.log(cellEl, cellValue)
      });  
   });
   // renderMessage();
}

// function renderMessage() {
//    if (gameStatus === null) {
//       msgEl.innerHTML = `Player <span style="color: ${COLOR_LOOKUP[turn]}">${COLOR_LOOKUP[turn].toUpperCase()}</span>'s Turn`;
//    } else if (gameStatus === 'T') {
//       // Tie game
//    } else {
//       // Player has won!
//    }
// }