const databasee = require('./database')








    function addlanguage(req,res){
    let titlee = req.query.title
    let img1 =req.query.img
    let email2 =req.query.email
console.log(img1)
    databasee.create({titlee,img1,email2})



}

module.exports=addlanguage