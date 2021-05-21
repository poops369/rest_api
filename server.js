const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/.env" });
const connectDB = require("./config/connectDB");
const contactRouter = require("./routes/Test");

app.use(express.json());
connectDB();
app.use("/api/contacts", contactRouter);

const PORT = 6000;
app.listen(PORT, (err) =>
    err ? console.log(err) : console.log(`server is running on PORT ${PORT}`)
);
