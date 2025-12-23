
document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.querySelector('#color-generator button');
    const colorBox = document.querySelector('.color-box');
    const colorCode = document.querySelector('.color-code');

    generateButton.addEventListener('click', function() {
        
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        
        colorBox.style.backgroundColor = randomColor;
        
        colorCode.textContent = randomColor;
    });
});
