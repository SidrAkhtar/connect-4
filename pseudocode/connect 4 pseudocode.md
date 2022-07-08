1. Define required constants

   1.1. Define colors object with keys of “null” when the circle is empty and players 1 and -1.
   
   1.2. Value assigned to each key represents the color to display for an empty circle player 1 and player -1
      
      1.2.1. Player 1: “mediumpurple”, player 2: “crimson”, null: “silver”
  
  1.3. Define 4 possible winning combinations, each containing 4 indexes of the board.


2. Define required variables used to track the state of the game
   
   2.1. Use board array to represent the circles
   
   2.2. Use a turn variable to remember whose turn it is
   
   2.3. Game status variable (null, 1/-1, T)


3. Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
   
   3.1. Store 42 elements to represent the circle on the page.
   
   3.2. Store pointers to display on top of each column so the player knows where to drop the circle/color.


4. Upon loading the app should:
   
   4.1. Initialize the state variables
      
      4.1.1. When the app loads, initialize the board array to 42 (for each empty circle)
      
      4.1.2. Initialize whose turn it is (player 1 represented by “mediumpurple” color player 2 presented by “crimson” color.
      
      4.1.3. Initialize the winner to “null” because there is no winner or tie yet.
         
         4.1.3.1. Winner will have player value 1/-1 when there is a winner or will have ‘T’ if there is a tie.
   
   4.2. Render those values to the page
      
      4.2.1. Render the board
         
      4.2.1.1. Loop over each of the 42 circles on page
      
      4.2.2. Render a message:
         
      4.2.2.1. Show a message to indicate which player’s turn it is
         
      4.2.2.2. If  a player wins, render a congratulatory message 
         
      4.2.2.3. If it is a tie game, render a tie message
   
   4.3. Wait for the player to click a pointer on top of the column


5. Handle a player clicking a circle
   
   5.1. Get the index of the circle that was clicked
   
   5.2. If the board ha a value at the index, return right away because that circle is taken
   
   5.3. If the winner is not null, return because the game is over.
   
   5.4. Update board array at the index with the value of turn.
   
   5.5. Set the winner variable if there's a winner:
   
   5.6. If there's no winner, check and see if there's a tie:
   
   5.7. All state has been updated, so render the state to the page (step 4.2).


6. Handle a player clicking the play again button
   
   6.1. Repeat  steps  4.1 (initialize the state variables) and 4.2 (render)
