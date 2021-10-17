
const databasee = require('./database')






   function getFavoritee (req,res){
    let email2 = req.query.emaill

       
    databasee.find({email2},function(error,data){
if(error){
    console.log(error)
}
else{
console.log(data)
res.send(data)
}
    })



   }
   module.exports=getFavoritee