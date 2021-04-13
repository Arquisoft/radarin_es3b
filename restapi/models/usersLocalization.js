const mongoose = require("mongoose");


const schema = mongoose.Schema({
    user: String,
	latitude: Number,
	longitude: Number,
	createdAt: { type: Date, expires: '1m', default: Date.now }
	
	 
})



module.exports = mongoose.model("usersLocalization", schema)