const databasee = require('./database')

const mongoose =require('mongoose')
require('dotenv').config()


mongoose.connect(`${process.env.MONGO_SERVER_LINK}`)





async   function updateeeeeee(req,res){
    let title= req.query.title
   
    let id= req.query.dataID

    console.log(id)
       await databasee.findByIdAndUpdate(id,{title,id},(error,updateddate)=>{
   
      databasee.find({},function (error,data){
           if(error){
               console.log(error)
           }else{
               res.send(data)  
           }
         
           
       })
    })

       
     
    
    
    
    }
    
    module.exports=updateeeeeee