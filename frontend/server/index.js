const express = require("express");
const path = require("path");
const app = express()
const port = process.env.PORT || 9000

app.use(express.static(path.join(__dirname, "../build")))

app.get("/ping", (req, res)=> res.send("Pong!"))

app.get("/*", (req, res) => {
 const file = path.join(__dirname, "../build", "index.html");

 res.sendFile(file)
})

app.listen(port, _=> console.log("Server started on port", port))