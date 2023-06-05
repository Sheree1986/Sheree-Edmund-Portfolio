//==================(for conn to mongodb, use mongoose)================
//===================================================================

const mongoose = require('mongoose')
//mongodb connection
const connectDB = async() =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        //used colors for help differentiate in terminal(GUI)
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
    } catch(error){
        console.log(error);
        //close the process with failure
        process.exit(1)
    }
}
//bring it to index.js and run it!!!
module.exports = connectDB