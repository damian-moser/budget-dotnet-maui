function toggle() {
    document.getElementById("popup").classList.toggle("visible");
}

function editCashValue(identifier, plus) {
    const value = document.getElementById(identifier.dataset.cashType);
    if (plus) {
        const result = parseFloat(value.innerHTML) + parseFloat(identifier.dataset.cashType);
        value.innerHTML = result.toFixed(2);
    } else {
        const result = parseFloat(value.innerHTML) - parseFloat(identifier.dataset.cashType);
        value.innerHTML = result >= 0 ? result.toFixed(2) : 0;
    }
}

function saveCash() {
    
}
