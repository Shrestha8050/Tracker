const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(
      `mongoDB connected ${connect.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.log(`ERROR : ${err.message}`.red);
  }
};

module.exports = connectDB;
