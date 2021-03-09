const mongoose = require("mongoose")


const schema = mongoose.Schema({
    user: String,
	latitude: Number,
	longitude: Number
	 
})

module.exports = mongoose.model("usersLocalization", schema)