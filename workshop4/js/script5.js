const pname = document.getElementById("pname");
const button = document.querySelector("button");
const productList = document.getElementById("productList");

button.addEventListener("click", function () {

    if (pname.value.trim() === "") {
        alert("กรุณาใส่ชื่อผลิตภัณฑ์");
        return;
    }

    const li = document.createElement("li");
    li.textContent = pname.value;

    productList.appendChild(li);

    pname.value = "";
});