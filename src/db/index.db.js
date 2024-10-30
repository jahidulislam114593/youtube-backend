import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    // console.log(connectionInstance);
    console.log(
      `\nMongoDB is connected to ${DB_NAME} !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB error from indexdb: ", error);
    process.exit(1);
  }
};

export default connectDB;
