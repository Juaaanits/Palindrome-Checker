//Function to check if a number or string is palindrome
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