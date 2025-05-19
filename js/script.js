const input = document.querySelector('#text-input');
const checkBtn = document.querySelector('#check-btn');
const result = document.querySelector('#result');

checkBtn.addEventListener('click', () => {
    const originalText = input.value;
    if (!originalText){
        alert("Please input a value");
        return;
    }

    const cleanedText = originalText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');

    result.classList.remove('hidden');

    if (cleanedText === reversedText) {
        result.textContent = `${originalText} is a palindrome`;
    } else {
        result.textContent = `${originalText} is not a palindrome`;
    }

});