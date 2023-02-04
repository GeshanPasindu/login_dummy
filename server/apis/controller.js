const{createAccount} = require("./services")
const{genSaltSync,hashSync} = require('bcrypt')

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

    }
};