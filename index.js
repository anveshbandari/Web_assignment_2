function reverseString() {
    const input = document.getElementById('reverseInput').value.trim();
    if (!input) {
        document.getElementById('reverseResult').innerText = 'Please enter a string.';
        return;
    }
    const reversed = input.split('').reverse().join('');
    document.getElementById('reverseResult').innerText = `Reversed: ${reversed}`;
}

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

function calculateTotal() {
    const subtotal = parseFloat(document.getElementById('billSubtotal').value);
    const tipPercent = parseFloat(document.getElementById('tipPercentage').value);
    if (isNaN(subtotal) || subtotal <= 0 || isNaN(tipPercent) || tipPercent < 0) {
        document.getElementById('totalAmount').innerText = 'Please enter valid positive numbers.';
        return;
    }
    const tipAmount = subtotal * (tipPercent / 100);
    const total = (subtotal + tipAmount).toFixed(2);
    document.getElementById('totalAmount').innerText = `Total amount including tip: $${total}`;
}
