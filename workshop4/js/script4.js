const score = document.getElementById("score");
const button = document.querySelector("button");
const grade = document.getElementById("grade");

button.addEventListener("click", function () {
    let s = Number(score.value);

    if (isNaN(s) || s < 0 || s > 100) {
        grade.textContent = "Grade: กรุณากรอกคะแนน 0 - 100";
    } else if (s >= 80) {
        grade.textContent = "Grade: A";
    } else if (s >= 70) {
        grade.textContent = "Grade: B";
    } else if (s >= 60) {
        grade.textContent = "Grade: C";
    } else if (s >= 50) {
        grade.textContent = "Grade: D";
    } else {
        grade.textContent = "Grade: E";
    }
});