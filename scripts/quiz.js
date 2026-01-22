import { playSound } from "./sound.js";

document.addEventListener("DOMContentLoaded", function() {

    const submitButton = document.getElementById("submit-quiz");
    let score = 0;
    let correctAnswered = new Set();

     submitButton.addEventListener("click", function() {
        const selectedAnswer = document.querySelector('input[name="quiz-option"]:checked');
        if (!selectedAnswer) {
            alert("Please select an answer.");
            return;
        }

        const userAnswer = selectedAnswer.value;
         const correctAnswer = "4"; //

        if (userAnswer === correctAnswer && !correctAnswered.has('q1')) {
              playSound("sounds/victory.mp3");
            alert("Correct!");
            correctAnswered.add('q1');
            score++;
        } else if (userAnswer !== correctAnswer) {
            alert("Incorrect. Try again.");
            playSound("sounds/bombaclat.mp3");
        }
        document.getElementById("score").textContent = score;

    });
    const submitButton2 = document.getElementById("submit-quiz2");
    submitButton2.addEventListener("click", function() {
        const selectedAnswer = document.querySelector('input[name="quiz-option2"]:checked');
        if (!selectedAnswer) {
            alert("Please select an answer.");
            return;
        }

        const userAnswer = selectedAnswer.value;
        
        const correctAnswer = "10%";

        if (userAnswer === correctAnswer && !correctAnswered.has('q2')) {
           playSound("sounds/victory.mp3");
            alert("Correct!");
            correctAnswered.add('q2');
            score++;
        } else if (userAnswer !== correctAnswer) {
            alert("Incorrect. Try again.");
           playSound("sounds/bombaclat.mp3");
        }
        document.getElementById("score").textContent = score;

    });
    const submitButton3 = document.getElementById("submit-quiz3");
    submitButton3.addEventListener("click", function() {
        const selectedAnswer = document.querySelector('input[name="quiz-option3"]:checked');
        if (!selectedAnswer) {
            alert("Please select an answer.");
            return;
        }

        const userAnswer = selectedAnswer.value;
        
        const correctAnswer = "Guess game";

        if (userAnswer === correctAnswer && !correctAnswered.has('q3')) {
           playSound("sounds/victory.mp3");
            alert("Correct!");
            correctAnswered.add('q3');
            score++;
        } else if (userAnswer !== correctAnswer) {
            alert("Incorrect. Try again.");
              playSound("sounds/bombaclat.mp3");
        }
        document.getElementById("score").textContent = score;

    });
    const submitButton4 = document.getElementById("submit-quiz4");
    submitButton4.addEventListener("click", function() {
        const selectedAnswer = document.querySelector('input[name="quiz-option4"]:checked');
        if (!selectedAnswer) {
            alert("Please select an answer.");
            return;
        }

        const userAnswer = selectedAnswer.value;
        
        const correctAnswer = "Random HEX color";

        if (userAnswer === correctAnswer && !correctAnswered.has('q4')) {
            playSound("sounds/victory.mp3");
            alert("Correct!");
            correctAnswered.add('q4');
            score++;
        } else if (userAnswer !== correctAnswer) {
            alert("Incorrect. Try again.");
                playSound("sounds/bombaclat.mp3");
        }
        document.getElementById("score").textContent = score;

    });
    const submitButton5 = document.getElementById("submit-quiz5");
    submitButton5.addEventListener("click", function() {
        const selectedAnswer = document.querySelector('input[name="quiz-option5"]:checked');
        if (!selectedAnswer) {
            alert("Please select an answer.");
            return;
        }

        const userAnswer = selectedAnswer.value;
        
        const correctAnswer = "8";

        if (userAnswer === correctAnswer && !correctAnswered.has('q5')) {
                playSound("sounds/victory.mp3");
            alert("Correct!");
            correctAnswered.add('q5');
            score++;
        } else if (userAnswer !== correctAnswer) {
            alert("Incorrect. Try again.");
                playSound("sounds/bombaclat.mp3");
        }
        document.getElementById("score").textContent = score;

    });



});
