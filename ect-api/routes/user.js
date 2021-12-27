const router = require("express").Router();

router.get("/user-test", (req,res) => {
    res.send("user teest is succesfull");
})

router.get("/user-post-test", (req,res) => {
    const username = req.body.username
    res.send(username);
})

module.exports = router