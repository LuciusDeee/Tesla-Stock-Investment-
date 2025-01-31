function updateStockPrice() {
    let price = (700 + Math.random() * 100).toFixed(2);
    document.getElementById("stock-price").innerText = `$${price}`;
}

function fakeInvest(amount) {
    let result = `You have "invested" $${amount} in Tesla stock. This is for educational purposes only.`;
    document.getElementById("investment-result").innerText = result;
}

