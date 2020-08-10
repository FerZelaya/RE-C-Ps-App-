var express = require('express')
var router = express.Router()
var jwt = require('jsonwebtoken')

let secModel = require('./sec.model')

let init = async ()=>{
    await secModel.initModel()
}
init()



module.exports = router