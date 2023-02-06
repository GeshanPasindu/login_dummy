
const{addUser,logIn} = require("./controller");
const router = require("express").Router();

router.post("/register",addUser);
router.post("/login",logIn)


module.exports = router;