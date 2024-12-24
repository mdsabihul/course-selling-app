const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");
const { z } = require('zod');
const app = express();
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);


const main = async () => {
    await mongoose.connect(process.env.DB_URL + "/coursera-app");
    app.listen(3000)
    console.log("Listen on 3000")
}

main();
