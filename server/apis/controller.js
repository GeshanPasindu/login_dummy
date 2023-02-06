const{createAccount,getByEmail} = require("./services")
const{genSaltSync,hashSync, compareSync} = require('bcrypt');
const { sign } = require("jsonwebtoken");

module.exports={
    addUser: (req,res) =>{
        const body = req.body;
        
        const salt  = genSaltSync(10);
        body.Password = hashSync(body.Password,salt);
        createAccount(body,(err,result) =>{
            if(err){
                console.log(err);
                return res.send("database Error");
            }
            return res.send(result);

        });

    },
    logIn: (req,res) =>{
        const body =req.body;

        getByEmail(body.email,(err,results) =>{
            if(err){
                console.log(err);
                return res.json({
                    error: err
                });
            }
            if(!results){
                return res.json({
                    success: 0,
                    data: "Invalid email or Password"
                });
            }
            const compare =compareSync(body.Password,results.Password);
            if(compare){
                results.Password= undefined;
                const jwtoken = sign({result:results},"json1234",{
                    expiresIn: "1h"
                });
                return res.json({
                    success:1,
                    Message: "login Successful",
                    token: jwtoken
                });
            }else{
                return res.json({
                    success: 0,
                    data: "Invalid email or Password"

                });
            }
    
        });
        



    }
    

};