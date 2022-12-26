const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errrorMiddleware");
const port = process.env.PORT || 5000;
connectDB();

const goalRoute = require("./routes/goalRoutes");
const userRoute = require("./routes/userRoutes");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", goalRoute);
app.use("/api/user", userRoute);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
