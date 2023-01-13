const express = require("express");
const path = require("path");
const port = process.env.PORT || 3002;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(path.join(__dirname, "../build")));

app.get("/ping", function (req, res) {
 return res.send("pong");
});

app.get("/*", function (req, res) {
 res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, _ => console.log("Server started on port", port));