document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');

    function calculateTip() {
        const billAmount = parseFloat(document.getElementById('bill').value);
        const tipPercentage = parseFloat(document.getElementById('tip').value);
        
        if (isNaN(billAmount) || isNaN(tipPercentage)) {
            alert('Please enter valid numbers');
            return;
        }
    
        const tipAmount = billAmount * (tipPercentage / 100);
        const totalAmount = billAmount + tipAmount;
    
        document.getElementById('tipAmount').textContent = tipAmount.toFixed(2);
        document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
        document.getElementById('result').style.display = 'block';
    }

    button.addEventListener('click', () => {
        calculateTip();
    })
});