const mongoose = require("mongoose");


const schema = mongoose.Schema({
    user: String,
	password: String
	
	 
})



module.exports = mongoose.model("admin", schema)