const express = require("express");

const app = express();

app.get("/", (req, res) =>
{
    res.send("Bye there")
})


app.listen(PORT, () =>
{
    console.log("Server is listening on port" + PORT);
});


const PORT = 8080;