const express = require("express");
const app = express();
const port = 3000;

app.get('/square', (req, res) => {
    const number = parseInt(req.query.number);
    const square = number * number;

    res.send("Square = " + square);
});

app.listen(port, () => {
    console.log("Server's Running....");
});