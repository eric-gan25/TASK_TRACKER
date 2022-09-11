const mongoose = require('mongoose')

const connectionString = "mongodb+srv://TaskManager:123@taskmanager.sd8f9.mongodb.net/TaskManagers?retryWrites=true&w=majority"

const connectDB = (url) => {
    return mongoose
    .connect(connectionString, {
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })
}

module.exports = connectDB