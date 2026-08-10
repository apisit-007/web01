const express = require("express");
const app = express();
const port = 3000;

app.get('/student', (req, res) => {
    res.json({
        "name": "Bird Wan Wang Wang",
        "day": "690810",
        "job": "Content Creator"
    });
});

app.listen(port, () => {
    console.log("Server's Running....");
});