const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
// Importing the database configuration
const db = require("./models");
const absenRouter = require("./routes/absen.router.js");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes    
app.get("/", (req, res) => {
    res.send("Hello guys");
});

app.use("/absen", absenRouter);

db.sequelize.sync({ alter: true }).then(() => {
    console.log("DB synced (with alter).");
});

app.listen(port, () => {
    console.log(`app run di http://localhost:${port}`);
});