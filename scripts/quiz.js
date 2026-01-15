document.addEventListener("DOMContentLoaded", function() {

    const submitButton = document.getElementById("submit-quiz");


     submitButton.addEventListener("click", function() {
        const selectedAnswer = document.querySelector('input[name="quiz-option"]:checked');
        if (!selectedAnswer) {
            alert("Please select an answer.");
            return;
        }

        const userAnswer = selectedAnswer.value;
        
        const correctAnswer = "4"; //

        if (userAnswer === correctAnswer) {
            alert("Correct!");
        } else {
            alert("Incorrect. Try again.");
        }
        let score = 0;
if (userAnswer === correctAnswer) {
    score++;
}
document.getElementById("score").textContent = score;

    });



});
