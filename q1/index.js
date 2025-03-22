function reverseString() {
    const input = document.getElementById('reverseInput').value.trim();
    if (!input) {
        document.getElementById('reverseResult').innerText = 'Please enter a string.';
        return;
    }
    const reversed = input.split('').reverse().join('');
    document.getElementById('reverseResult').innerText = `Reversed: ${reversed}`;
}
