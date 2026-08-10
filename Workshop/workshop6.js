const express = require("express");
const app = express();
const port = 3000;

app.get('/grade', (req, res) => {
    const score = parseInt(req.query.score);
    let grade;

    if (score >= 80) {
        grade = "A";
    } else if (score >= 70) {
        grade = "B";
    } else if (score >= 60) {
        grade = "C";
    } else if (score >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    res.send("Return Grade : " + grade);
});

app.listen(port, () => {
    console.log("Server's Running....");
});