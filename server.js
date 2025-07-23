const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World from my Dockerized Node.js app!");

});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
