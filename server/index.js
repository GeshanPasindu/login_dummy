const express = require('express')
require('dotenv').config();
const router = require("./apis/routers")
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use("/users",router);

app.listen(process.env.APP_PORT,() =>{
    console.log('server up and running on',process.env.APP_PORT)
})
