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

    if (cleanedText === reversedText) {
        result.textContent = `${originalText} is a palindrome`;
    } else {
        result.textContent = `${originalText} is not a palindrome`;
    }


});


/*Function to check if a number or string is palindrome
function isPalindrome(input) {
    // Convert the input to a string
    const str = input.toString();
    // Get the length of the string
    const len = str.length;
    // Loop through half of the string
    for (let i = 0; i < len / 2; i++) {
        // Check if the characters at the start and end are different
        if (str[i] !== str[len - 1 - i]) {
            return false; // Not a palindrome
        }
    }
    return true; // Is a palindrome
}


let input = 12321;
//If palindrom, output yes else no
if (isPalindrome(input)) {
    console.log("yes");
}   
else {
    console.log("no");
}

*/