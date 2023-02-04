const{addUser} = require("./controller");
const router = require("express").Router();

router.post("/register",addUser);


module.exports = router;