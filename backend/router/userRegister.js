const express = require("express");
const router = express.Router();
const register_User = require("../model/userRegisterSchema");

router.post("/user", async (req, res) => {
  const {
    userName,
    email,
    password,
    country,
    city,
    number,
    profession,
    skills,
  } = req.body;
  try {
    const postUser = await new register_User({
      userName: userName,
      email: email,
      password: password,
      country: country,
      city: city,
      number: number,
      profession: profession,
      skills: skills,
    }).save();
    console.log(
      userName,
      email,
      password,
      country,
      city,
      number,
      profession,
      skills
    );
    res.status(200).send({ msg: "Successfully Registered.", postUser });
  } catch (error) {
    res.status(400).send({ msg: "There is Some Issues Right Now." });
  }
});

router.get("/users", async (req, res) => {
  try {
    const userData = await register_User.find({});
    res.status(200).send({ msg: "SuccessFully Fetched!", userData });
  } catch (error) {
    res.status(400).send({ msg: "Something went Wrong!" });
  }
});

module.exports = router;
