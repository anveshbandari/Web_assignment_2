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
