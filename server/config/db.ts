import dns from "node:dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on("connected", () => console.log("MongoDB Connected"));
    await mongoose.connect(process.env.MONGODB_URI!);
}


export default connectDB