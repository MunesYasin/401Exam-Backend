
const databasee = require('./database')






   function getFavoritee (req,res){
      

       
    databasee.find({},function(error,data){
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