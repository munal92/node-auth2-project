const bcryptjs = require("bcryptjs");
const router = require("express").Router();
const jwt = require('jsonwebtoken');
const secret = require('../config/secret.js');

const UserDB = require('../Routes/user/user-model.js');
const {isValid} = require('../Routes/user/user-service.js');

router.post("/register", (req, res) => {
    const userInfo = req.body ;

    if(isValid(userInfo)){
        UserDB.addUser(userInfo)
        .then(u => {
            res.status(400).json(u);      
             
        }).catch(err => {
            res.status(500).json({ message: "Server Error Try Again Later"   ,error:err });
        })



    }else{
        res.status(404).json({
            message: "please provide username and password ",
          }); 
    }

})


router.post('/login', (req,res) => {
    const userInfo = req.body ;

    if(isValid(userInfo)){
        UserDB.findUserByName({username: userInfo.username})
        .then(u => {
            res.status(400).json(u);      
             
        }).catch(err => {
            res.status(500).json({ message: "Server Error Try Again Later"   ,error:err });
        })



    }else{
        res.status(404).json({
            message: "please provide username and password ",
          }); 
    }




})



module.exports = router;