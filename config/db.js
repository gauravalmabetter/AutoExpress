import mongoose from "mongoose";

const ConnectDB = async () =>{
    try {
       const conn = await mongoose.connect("mongodb+srv://vermamonu185:xNni3UwAVa1Z2lx0@cluster0.4rastmp.mongodb.net/?retryWrites=true&w=majority",{
        useUnifiedTopology: true

       });
       console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}

export default ConnectDB;