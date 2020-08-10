var express = require('express')
var router = express.Router()


var recipesRoutes = require('./recipes')

router.use("/recipes", recipesRoutes)

module.exports = router
