const connect = require("../database");

module.exports ={
    createAccount:(body,callBack) =>{
        console.log(body);
        connect.query(
            `INSERT INTO user (First_name,Last_name,Birthday,Email,Password)
            values(?,?,?,?,?)  `,
            [
                body.First_name,
                body.Last_name,
                body.Birthday,
                body.Email,
                body.Password
            ],
            (err,result,fields) =>{
                if(err){
                    return callBack(err)

                }
                return callBack(null,result);
            }
        )

    }
}