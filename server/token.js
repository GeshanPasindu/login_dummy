const { verify } = require("jsonwebtoken");


module.exports = {
    verifyToken: (req,res,next) =>{
        let token = req.header("autherization");
        if(!token) return res.json("User is not logged in")
        if(token){
            token = token.slice(7);
            verify(token,"json1234",(err,decoded) =>{
                if(err){
                    res.json({
                        success:0,
                        Message:"Token is not valid"
                    });
                }
                else{
                    next();

                }
            });
        }else{
            res,json(
                {
                    success: 0,
                    Message:"User nor valid"
                }
            )
        }

    }
};