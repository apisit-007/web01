const express = require("express");
const app = express();
const port = 3000;

app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    res.send("Product ID : " + id);
});

app.listen(port, () => {
    console.log("Server's Running....");
});