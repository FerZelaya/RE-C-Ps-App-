const db = require('../../dao/db')
const ObjectId = require('mongodb').ObjectId
const bcrypt = require('bcrypt')
const { use } = require('passport')
const e = require('express')

let userColl

module.exports = class {

    static async initModel(){
        if(!userColl){
            let _db = await db.getDB()
            userColl = await _db.collection('users');
            if(process.env.ENSUREINDEX == "1"){
                //console.log('User index being created');
                await userColl.createIndex({"email":1},{unique:true})
            }
            console.log("Users collection created");
            return
        }else{
            return
        }
    }

    


}