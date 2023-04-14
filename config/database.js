const mongoose = require("mongoose");

const dbUrl = process.env.MONGODB_URI;

mongoose.set("strictQuery", false);

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(dbUrl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = dbConnection;
