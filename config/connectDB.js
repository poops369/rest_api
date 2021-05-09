const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log("the database is connected");
    } catch (error) {
        console.log({ msg: "data base not connected", error });
    }
};
module.exports = connectDB;
