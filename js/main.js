/*----- constants -----*/
   const COLOR_LOOKUP = {
   // cell values: 0, 1, -1
   '0': 'white',
   '1': 'mediumpurple',
   '-1': 'palevioletred', //hotpink
   }


/*----- app's state (variables) -----*/
// Array of  42 elements... null -> circles available; 1 or -1  for players
let board; // 2D Array wherre the nested arrays represent the columns
let turn; // 1 or -1; 0 for empty cell
let winner = null;
let gameStatus; // null -> game in play; 1/-1 player win; 'T' -> tie

// lookup how to keep track of scores. watch RPS  lecture!!!


/*----- cached element references -----*/
const pointerEls = [...document.querySelectorAll('#pointers > div')];
const msgEl = document.querySelector('h3');
const msgEls = document.querySelector('h4');


/*----- event listeners -----*/
document.getElementById('pointers').addEventListener('click', handleDrop);


/*----- functions -----*/
init();

// initialize state, then  calll render()
function init() {
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
   gameStatus = null;
   render();
   winner = null;
}

function render() {
   // Iterate over the column  arrays
   board.forEach(function(columnArr, columnIdx) {
      columnArr.forEach(function(cellValue, rowIdx) {
         const cellEl = document.getElementById(`c${columnIdx}r${rowIdx}`);
         cellEl.style.backgroundColor = COLOR_LOOKUP[cellValue];
         console.log(cellEl, cellValue)
      });  
   });
   renderPointers();
   renderMessage();
}

// to hide/show the pointers... hide if no 0' left in the column
function renderPointers() {
   pointerEls.forEach(function(pointerEl, columnIdx) {
      pointerEl.style.visibility = board[columnIdx].includes(0) ? 'visible' : 'hidden';
   });
}

// In responce to user interaction (e.g., click). We update ALL impacted state, then lastly, call render
function handleDrop(evt) {
   const columnIdx = pointerEls.indexOf(evt.target);
   // Guards
   if (columnIdx === -1) return;
   const columnArr = board[columnIdx];
   if (!columnArr.includes(0)) return;
   const rowIdx = columnArr.indexOf(0);
   columnArr[rowIdx] = turn;
   turn *= -1;
   winner = checkWin(columnIdx, rowIdx);
   console.log(winner)
   gameStatus = getGameStatus();
   render();
}

function renderMessage() {
   if (gameStatus === null) {
      msgEl.innerHTML = `Player <span style="color: ${COLOR_LOOKUP[turn]}">${COLOR_LOOKUP[turn]}</span>'s Turn!`;
   } else if (gameStatus === 'T') {
      // Tie game
      msgEl.textContent = 'Tie Game! Try Again!';
  } else {
    // Player has won!
    msgEl.innerHTML = `Player <span style="color: ${COLOR_LOOKUP[turn*-1]}">${COLOR_LOOKUP[turn*-1]}</span>'s Wins!`;
  }
}

function checkWin(columnIdx, rowIdx) {
   const player = board[columnIdx][rowIdx]
   return checkVertWin(columnIdx, rowIdx, player) ||
    checkHorzWin(columnIdx, rowIdx, player)
   // || 
   // checkDiagWin(columnIdx, rowIdx, player);
    }

function checkVertWin(columnIdx, rowIdx, player) {
   const columnArr = board[columnIdx];
   let count = 1;
   // We can use/modify rowIdx because we won't need
   // to access it's original value anymore
   rowIdx--;
   // Count until no longer the same 'player'
   while(columnArr[rowIdx] === player && rowIdx >= 0) {
         count++;
         rowIdx--;
   }
   console.log (count);
   return count === 4 ? winner = true : null;
}
   

function checkHorzWin(columnIdx, rowIdx, player) {
   const columnArr = board[columnIdx][rowIdx];
   // console.log('columnIdx', columnIdx);
   // console.log('rowIdx', columnIdx);
   let count = 1
   let idx = columnIdx + 1;
   while((idx < board.length) && board[idx][rowIdx] === columnArr) {
      count++;
      idx--;
   }
   idx = columnIdx - 1;
   while((idx >= 0) && board[idx][rowIdx] === columnArr) {
      count++;
      idx--;
   }
      // console.log (count);
      return count >=4 ? winner = true : null;
   }


// function checkDiagWin(columnIdx, rowIdx, player) {
   
// }


// TODO: need to update gameStatus!!!
   // NEED TO FIND OUT HOW TO MOVE THE CIRCLE/PLAYER'S TURN 
   // TO LAST ITEM IN THE COLUMN!!! MAYBE CHANGE INDEX???
   // gameStatus = getGameStatus();

function getGameStatus() {
   let flattenBoard = board.flat(2);
   if (!flattenBoard.includes(0)) return 'T';
   if (winner === true) return 'W';
   return null;
}

// function getGameStatus() {
//    // Player won!
//    if (winner === 1) {
//           msgEls.innerHTML = 'Purple Wins!';
//           alert('Purple Wins!')
//       } else if
//    // Player won!
//    (winner === -1) {
//       msgEls.innerHTML = 'Pink Wins!';
//       alert('Pink Wins!')
//    //  } else (winner === 'null' && !(board.includes(0)))
//    //    //Tie
//    //    msgEls.innerHTML = '?Tie game! Try again!'
//    }
// }

// Render’s job is to transfer/visualize all state to the DOM




// function renderMessage() {
//    if (gameStatus === null) {
//       msgEl.innerHTML = `Player <span style="color: ${COLOR_LOOKUP[turn]}">${COLOR_LOOKUP[turn].toUpperCase()}</span>'s Turn`;
//    } else if (gameStatus === 'T') {
//       // Tie game
//       msgEl.textContent = 'Tie Game! Try Again!';
//   } else {
//     // Player has won!
//     msgEl.innerHTML = `Player <span style="color: ${COLOR_LOOKUP[gameStatus]}">${COLOR_LOOKUP[gameStatus].toUpperCase()}</span>'s Wins!`;
//   }
// }


