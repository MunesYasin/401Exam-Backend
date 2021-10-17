const mongoose  = require('mongoose'); 

const favorite = new mongoose.Schema({



    titlee : String , 
    img1 : String , 
    email2 : String , 
    


})

const favorites = mongoose.model('favorite',favorite)
module.exports=favorites