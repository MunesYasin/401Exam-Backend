const databasee = require('./database')

const mongoose =require('mongoose')
require('dotenv').config()


mongoose.connect(`${process.env.MONGO_SERVER_LINK}`)





 async   function addlanguage(req,res){
let title = req.query.title
let img = req.query.img
console.log(title)
   await databasee.create({title,img})



}

module.exports=addlanguage