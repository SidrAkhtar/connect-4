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
const circleEls = document.querySelectorAll('.board > div');
const msgEl = document.querySelector('h3');

/*----- event listeners -----*/


/*----- functions -----*/
init()

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

   } else {

   }
}