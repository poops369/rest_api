const express = require("express");
const User = require("../models/User");
const routerr = express.Router();
const contact = require("../models/User");

//       POST :  ADD A NEW USER TO THE DATABASE

routerr.post("/", async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        if (!name || !email) {
            return res.status(400).send("name and email are required");
        }
        const userr = await User.findOne({ email });
        if (userr) {
            return res.status(400).send("contact is already used");
        }
        const user = new User({
            name,
            email,
            phone,
        });
        await user.save();
        res.status(200).send({ msg: "user has been added", user });
    } catch (error) {
        res.status(500).send("impossible to add user");
    }
});
module.exports = routerr;
