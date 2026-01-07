document.addEventListener('DOMContentLoaded', function() {
    const checkButton = document.getElementById('check-button');
    const restartButton = document.getElementById('restart-button');
    const resultDisplay = document.querySelector('.result');
    let NumberToGuess = Math.floor(Math.random() * 10) + 1;
    let userGuess = null;

    document.getElementById('guess-input').addEventListener('input', function(event) {
        userGuess = parseInt(event.target.value, 10);
    });

    checkButton.addEventListener('click', function() {
        if (userGuess === NumberToGuess) {
            resultDisplay.textContent = "Correct!";
        } else {
            resultDisplay.textContent = "Wrong!";
        }
    });

    restartButton.addEventListener('click', function() {
        NumberToGuess = Math.floor(Math.random() * 10) + 1;
        resultDisplay.textContent = "";
        document.getElementById('guess-input').value = "";
        userGuess = null;
    });
});
  document.getElementById('copy-button').addEventListener('click', function() {
 async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}
  });