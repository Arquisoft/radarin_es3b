const express = require("express")
const User = require("./models/users")
const UserLocalization = require("./models/usersLocalization")
const router = express.Router()

// Get all users
router.get("/users/list", async (req, res) => {
    const users = await User.find({}).sort('-_id') //Inverse order
	res.send(users)
})

//register a new user
router.post("/users/add", async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    //Check if the device is already in the db
    let user = await User.findOne({ email: email })
    if (user)
        res.send({error:"Error: This user is already registered"})
    else{
        user = new User({
            name: name,
            email: email,
        })
        await user.save()
        res.send(user)
    }
})

router.get("/userLocalization/get/:user", async (req, res) => {
    var user = req.params.user
    let userLocalization= await UserLocalization.findOne({ user: user })
    if(userLocalization){
        res.send(userLocalization)
    }

    else{
        userLocalization = new UserLocalization({
            user: "error",
            latitude: 0,
            longitude: 0,
        })
        res.send(userLocalization)
    }
})



router.post("/userLocalization/add", async (req, res) => {
    let user = req.body.user;
    let latitude = req.body.latitude;
	let longitude = req.body.longitude;
	
    //Check if the device is already in the db
    let userLocalization= await UserLocalization.findOne({ user: user })
    if (userLocalization)
        UserLocalization.findOneAndUpdate({user: user}, req.body, function (err, response) {
		res.send(response);
});
    else{
        userLocalization = new UserLocalization({
            user: user,
            latitude: latitude,
			longitude: longitude,
        })
        await userLocalization.save()
        res.send(userLocalization)
    }
})

module.exports = router