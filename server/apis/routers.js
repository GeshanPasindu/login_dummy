
const{addUser,logIn,getUserData} = require("./controller");
const router = require("express").Router();
const {verifyToken} = require("../checkToken")

router.post("/register",addUser);
router.post("/login",logIn)
router.get("/getusers",verifyToken,getUserData)


module.exports = router;