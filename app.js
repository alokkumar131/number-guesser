// Game variable
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max)
gussessLeft = 3;

// UI Elements
const game = document.getElementById('game'),
    minNum = document.querySelector('.minNum'),
    maxNum = document.querySelector('.maxNum'),
    guessBtn = document.getElementById('guess-btn'),
    guessInput = document.getElementById('guess-input'),
    messageTxt = document.querySelector('.message')


// Set min and max value in ui
minNum.textContent = min;
maxNum.textContent = max;


// Play again Listener
game.addEventListener('mousedown', function(e) {
    if (e.target.className == 'btn btn-primary btn-sm play-again') {
        window.location.reload();
    }
})

// listen to guess
guessBtn.addEventListener('click', function() {
    guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Guess number between ${min} and ${max}`, 'red');
    } else {
        if (winningNum === guess) {
            //Disable button
            guessInput.disabled = true;
            //Add green border
            guessInput.style.borderColor = 'green';
            // Add wining message
            setMessage(`${winningNum} is correct, You Win`, 'green')
            // Play again
            guessBtn.value = "Play again";
            guessBtn.classList.add('play-again')
        } else {
            gussessLeft -= 1;
            if (gussessLeft === 0) {
                //Disable button
                guessInput.disabled = true;
                //Add green border
                guessInput.style.borderColor = 'red';
                // Add wining message
                setMessage(`You Lost, the correct number was ${winningNum}`, 'red');
                // Play again
                guessBtn.value = "Play again";
                guessBtn.classList.add('play-again')
            } else {
                guessInput.value = '';
                setMessage(`Guess is not correct, ${gussessLeft} guesses left`, 'red');
            }

        }
    }
})

// Set message
function setMessage(msg, color) {
    messageTxt.style.color = color;
    messageTxt.textContent = msg;
}

// random num generator
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}