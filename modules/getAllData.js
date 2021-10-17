
const axios = require('axios')
require('dotenv').config()


async function getAllData(req,res){


let getdata = `${process.env.API_LINK}`
let newData = await axios.get(getdata)
class Dataa{
    constructor(language){
        this.title=language.title;
        this.imgUrl = language.imageUrl;
    }
}
let newArr = newData.data.map(item=>{
    return new Dataa(item)
})
console.log(newArr)
res.send(newArr)

}
module.exports=getAllData