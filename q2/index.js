function checkPalindrome() {
    const input = document.getElementById('palindromeInput').value.trim();
    if (!input || isNaN(input)) {
        document.getElementById('palindromeResult').innerText = 'Please enter a valid number.';
        return;
    }
    const reversed = input.split('').reverse().join('');
    const result = input === reversed ? 'Yes, it is a palindrome!' : 'No, not a palindrome.';
    document.getElementById('palindromeResult').innerText = result;
}
