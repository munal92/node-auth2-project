const router = require("express").Router();
const UserDB = require('./user-model.js')





router.get('/', (req,res) => {
   UserDB.findAllUsers()
     .then(users => {
        res.status(200).json(users);
     }).catch(err => {
        res.status(500).json({errorMessage:"server Error" , err});
     })
     //console.log("user //" ,user);
   
   
})

module.exports = router;