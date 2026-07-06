const heading = document.querySelector("h1");
const button = document.querySelector("button");

button.addEventListener("click", function () {
    if (heading.textContent === "มหาวิทยาลัยราชภัฏนครปฐม") {
        heading.textContent = "สาขาวิชาวิทยาการคอมพิวเตอร์ NPRU";
    } else {
        heading.textContent = "มหาวิทยาลัยราชภัฏนครปฐม";
    }
});