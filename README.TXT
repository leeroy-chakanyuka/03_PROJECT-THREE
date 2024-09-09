00. GET ELEMENT BY ID
    *Use this instead of [querySelector]
    *Faster than the querySelector
        document.getElementById["no #"]

01. CHANGING THE SOURCE ELEMENT OF AN IMAGE
    *[stored element].src = `xxxxx${}xxxxx` //you can use a template literal, remember!
            diceEL.classList.remove("hidden");
            diceEL.src = `IMAGES/dice-${ans}.png`;
    
02. KEEPING TRACK OF THE SCORE
    *if (ans === 1) {
          switch player
        } else {
          playerTwoTotal += ans; || total score as seen under "PLAYER X"
          playerTwoCurrent.textContent = playerTwoTotal; || Displaying that total score
        }
      
03. SWITCHING PLAYERS
    *check which player's turn it is [if player1]
    *switch to the other player [true : player = player2]
    *Use the [toggle] property of the function class to add transition
            document
            .querySelector(`.player--${activePlayer}`)
            .classList.toggle("player--active");