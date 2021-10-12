
const axios = require('axios')
require('dotenv').config()


async function getAllData(req,res){


let getdata = `${process.env.API_LINK}`
let newData = await axios.get(getdata)
console.log(newData)

res.send(newData.data)

}
module.exports=getAllData