const express = require("express");

const app = express();

app.get("")


app.listen(PORT, () =>
{
    console.log("Server is listening on port" + PORT);
});


const PORT = 8080;