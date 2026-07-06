const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
const count = document.getElementById("count");

button.addEventListener("click", function () {
    count.textContent = textarea.value.length;
});