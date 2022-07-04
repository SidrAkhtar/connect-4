/*----- constants -----*/
const COLOR_LOOKUP = {
   '1': 'purple',
   '-1': 'pink',
   null: 'white',
};

/*----- app's state (variables) -----*/
// Array of  42 elements... null -> circles available; 1 or -1  for players
let board; 
let turn; // 1 or -1
let gameStatus; // null -> game in play; 1/-1 player win; 'T' -> tie
// lookup how to keep track of scores. watch RPS  lecture!!!


/*----- cached element references -----*/
const circleEls = [...document.querySelectorAll('#board > div')];
const msgEl = document.querySelector('h3');

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleMove);

/*----- functions -----*/
init();

function init() {
   // board = new Array(42).fill(null);  professor did it for ttt.. instead he used board array
   board = [
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
   ];
   turn = 1;
   gameStatus = null;
   render();
}

// In responce to user interaction (e.g., click)
// We update  ALL impacted state,
// then lastly, call render
function handleMove(evt) {
   // Guards
   if (
      gameStatus ||
      !circleEls.includes(evt.target)
   ) return;
   const idx = circleEls.indexOf(evt.target);
   board[idx] = turn;
   turn *= -1;
   // TODO: need to update gameStatus!!!
   // NEED TO FIND OUT HOW TO MOVE THE CIRCLE/PLAYER'S TURN 
   // TO LAST ITEM IN THE COLUMN!!! MAYBE CHANGE INDEX???
   // gameStatus = getGameStatus();
   render();
}

// Render’s job is to transfer/visualize all state to the DOM
function render() {
   circleEls.forEach(function(circleEl, idx) {
      circleEl.style.backgroundColor = COLOR_LOOKUP[board[idx]];
   });
   renderMessage();
}

function renderMessage() {
   if (gameStatus === null) {
      msgEl.innerHTML = `Player <span style="color: ${COLOR_LOOKUP[turn]}">${COLOR_LOOKUP[turn].toUpperCase()}</span>'s Turn`;
   } else if (gameStatus === 'T') {
      // Tie game
   } else {
      // Player has won!
   }
}