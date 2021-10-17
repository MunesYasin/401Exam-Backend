const databasee = require('./database')

const mongoose =require('mongoose')
require('dotenv').config()


mongoose.connect(`${process.env.MONGO_SERVER_LINK}`)





async   function updateeeeeee(req,res){
    let titlee= req.query.title
   let email2 = req.query.emaill
    let ids= req.query.id
let img2 = req.query.img
    console.log(ids)
       await databasee.findByIdAndUpdate(ids,{titlee,img2},(error,updateddate)=>{
   
      databasee.find({email2},function (error,data){
           if(error){
               console.log(error)
           }else{
               res.send(data)  
           }
         
           
       })
    })

       
     
    
    
    
    }
    
    module.exports=updateeeeeee