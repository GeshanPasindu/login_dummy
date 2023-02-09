const connect = require("../database");

module.exports ={
    createAccount:(body,callBack) =>{
        
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

    },
    getByEmail:(email,cb) =>{
        connect.query(
            `SELECT * FROM user WHERE Email = ?`,
            [
                email
            ],
            (err,result,fields) =>{
                if(err){
                    return cb(err);
                }
                return cb(null,result[0]);
            }
        )


    },
    getUser:(cb) =>{
        connect.query(
            `SELECT First_name,Last_name,Birthday,Email FROM user`,
            
            (err,result,fields) =>{
                if(err){
                    return cb(err);
                }
                return cb(null,result);
            }
        )


    }

}