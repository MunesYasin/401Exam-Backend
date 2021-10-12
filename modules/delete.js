const databasee = require('./database')

const mongoose =require('mongoose')
require('dotenv').config()


mongoose.connect(`${process.env.MONGO_SERVER_LINK}`)





 async   function deleteeee(req,res){
let dataid = req.query.dataID
   await databasee.deleteOne({_id:dataid})
   databasee.find({},function (error,data){
       res.send(data)
   })



}

module.exports=deleteeee