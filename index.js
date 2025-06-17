const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello guys");
});

app.listen(port, () => {
  console.log(`app run di localhost:${port}`);
});
