const express = require("express");
const User = require("./models/users");
const UserLocalization = require("./models/usersLocalization");
const UserRegister = require("./models/usersRegister");
const Admin = require("./models/admin");
const router = express.Router();

// Get all users
router.get("/users/list", async (req, res) => {
    const users = await User.find({}).sort("-_id"); //Inverse order
    res.send(users);
});

//register a new user
router.post("/users/add", async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    //Check if the device is already in the db
    let user = await User.findOne({ email: email });
    if (user){
        res.send({ error: "Error: This user is already registered" });
    } 
    else {
        user = new User({
            name: name,
            email: email,
        });
        await user.save();
        res.send(user);
    }
});

router.get("/userLocalization/delete/:user", async (req, res) => {
    var user = req.params.user;


    let userLocalization = await UserLocalization.findOne({ user: user });
    if (userLocalization) {
        var response = await UserLocalization.findOneAndDelete({ user: user });
        res.send(response);
    }
    else {

        res.send({ error: "Error: El usuario no existe" });
    }



});

router.get("/userLocalization/deleteAll", async (req, res) => {

    var response = await UserLocalization.deleteMany();
    res.send(response);

});

router.get("/userLocalization/get/:user", async (req, res) => {
    var user = req.params.user;
    let userLocalization = await UserLocalization.findOne({ user: user });
    if (userLocalization) {
        res.send(userLocalization);
    }

    else {
        userLocalization = new UserLocalization({
            user: "error",
            latitude: 0,
            longitude: 0,
        });
        res.send(userLocalization);
    }
});



router.post("/userLocalization/add", async (req, res) => {
    let user = req.body.user;
    let latitude = req.body.latitude;
    let longitude = req.body.longitude;

    //Check if the device is already in the db
    let userLocalization = await UserLocalization.findOne({ user: user });
    if (userLocalization) {
        UserLocalization.findOneAndUpdate({ user: user }, req.body, function (err, response) {
            res.send(response);
        });
    }   
    else {
        userLocalization = new UserLocalization({
            user: user,
            latitude: latitude,
            longitude: longitude,
        });
        await userLocalization.save();
        res.send(userLocalization);
    }
});

router.post("/admin/login", async (req, res) => {
	
    let user = req.body.user;
	let password = req.body.password;
	
   

    //Check if the device is already in the db
    let admin = await Admin.findOne({ user: user, password:password });
    if (admin) {
		
        res.send({ message: "success" })
		
    }   
    else {
       res.send({ message: "error" })
	   
    }
});

module.exports = router;