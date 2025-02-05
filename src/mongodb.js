const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/LoginSignUpTutorial")
.then(() => {
    console.log("connected to mongodb")
})
.catch((err) => {
    console.log("failed to connect")
})

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const collection = new mongoose.model("collection1", LoginSchema)

module.exports = collection