function editCash() {
    document.getElementById("popup-cash").classList.toggle("visible");
}

function editCard() {
    document.getElementById("popup-edit-card").classList.toggle("visible");
}

function newCard() {
    document.getElementById("popup-new-card").classList.toggle("visible");
}

function removeCard() {
    document.getElementById("card").remove();
}

function removeCash() {
    document.getElementById("cash").remove();
}
