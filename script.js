//your code here
document.addEventListener('DOMContentLoaded', () => {
    const evaluatedText = document.getElementById('evaluatedText');
    const letterCount = document.getElementById('letterCount');

    evaluatedText.addEventListener('input', () => {
        const textLength = evaluatedText.value.length;
        letterCount.textContent = textLength;
    });
});
