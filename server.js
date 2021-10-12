'use strict'
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')
const mongoose =require('mongoose')

const PORT=process.env.PORT
const server=express()
server.use(cors())
mongoose.connect(`${process.env.MONGO_SERVER_LINK}`)

const getAllData = require('./modules/getAllData')
const addData = require ('./modules/addData')
const getFavorite = require ('./modules/getFavorite')
const deletee = require ('./modules/delete')
const updatee = require ('./modules/updatee')


server.get('/getAllData',getAllData)

server.post('/addData',addData)
server.get('/getFavorite',getFavorite)
server.delete('/delete',deletee)
server.put('/update',updatee)









server.listen(PORT,()=>{
    console.log(`listening to ${PORT}`)
})