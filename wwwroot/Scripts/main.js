window.removeElement = function (element) {
    element.remove();
}

document.querySelectorAll(".bilanz").forEach((el) => {
    el.addEventListener("click", () => window.location.href = "/history#bilanz")
});
