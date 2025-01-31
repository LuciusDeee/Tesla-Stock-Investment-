function updateStockPrice() {
    let price = (700 + Math.random() * 100).toFixed(2);
    document.getElementById("stock-price").innerText = `$${price}`;
}

function invest(amount) {
    let result = `You have invested $${amount} in Tesla stock.`;
    document.getElementById("investment-result").innerText = result;
}

function contactBroker() {
    alert("Your broker John Doe will contact you soon!");
}
