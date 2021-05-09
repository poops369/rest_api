const express = require("express");
const User = require("../models/User");
const router = express.Router();
const contact = require("../models/User");

//       POST :  ADD A NEW USER TO THE DATABASE

router.post("/", async (req, res) => {
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

//       GET :  RETURN ALL USERS
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send({ msg: "all contact", users });
    } catch (error) {
        res.status(500).send("impossible to add user");
    }
});

//        PUT : EDIT A USER BY ID

router.put("/:Id", async (req, res) => {
    try {
        const { Id } = req.params;
        //const id=req.params.Id
        const user = await User.findOneAndUpdate(
            { _id: Id },
            { $set: { ...req.body } }
        );
        res.status(200).send({ msg: "user edited", user });
    } catch (error) {
        res.status(500).send("impossible to edit user");
    }
});

//        DELETE : REMOVE A USER BY ID

router.delete("/:Id", async (req, res) => {
    try {
        const { Id } = req.params;
        const user = await findByIdAndDelete(Id);
        res.status(200).send({ msg: "user deleted ", user });
    } catch (error) {
        res.status(500).send("impossible to delete user");
    }
});

module.exports = router;
