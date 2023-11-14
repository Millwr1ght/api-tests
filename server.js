const express = require('express');
const app = express();
const port = 3000;
const name = "Nate";

app.get("/", (req, res) => {
    res.send(`Hello ${name}`);
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
})