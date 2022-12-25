const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongoDB connected :${conn.connection.host}`.cyan);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;
