const mongoose = require("mongoose");


const schema = mongoose.Schema({
    user: String,
	allowed: Boolean
	
	
})



module.exports = mongoose.model("usersRegister", schema)