var express = require('express')
var router = express.Router()
const model = require('./recipes.model')

const init = async () => {
    await model.initModel()
}
init()

//show all recipes
router.get('/showAll', async(req,res)=>{
    try{
        let recipes = await model.showAllRecipes()
        res.status(200).json(recipes)
    }catch(error){
        console.log(error);
        res.status(500).json({"ERROR":"Unable to show all recipes"})
    }
})

//show one recipe
router.get('/info/:recipeid', async (req, res)=>{
    try{
        let {recipeid} = req.params;
        let result = await model.getOneRecipe(recipeid);
        res.status(200).json(result);
    }catch(err){
      console.log(err);
      res.status(500).json({ "ERROR": "Search failed" });
    }
})

//Show user recipes
router.get('/showUserRecipes', async(req,res)=>{
    try{
        var user = req.user._id;
        let recipes = await model.showUserAllRecipes(user)
        res.status(200).json(recipes)
    }catch(error){
        console.log(error);
        res.status(500).json({"ERROR":"Unable to show all recipes"})
    }
})

//Post own recipe
router.post('/postRecipe', async(req,res)=>{
    try {
        var {title, ingredients, preparation, servingSize, calories} = req.body
        var result = await model.postRecipe(title, ingredients, preparation, servingSize, calories)        
        res.status(200).json(result)
    }catch(error){
        console.log(error);
        res.status(500).json({"ERROR":"Unable to post your recipe"})
    }
})

router.delete('/deleteRecipe/:recipeid', async(req,res)=>{
    try{
        const {recipeid} = req.params
        const result = await model.deleteRecipe(recipeid)
        res.status(200).json(result)
    }catch(error){
        console.log(error);
        res.status(500).json({"ERROR":"Unable to delete your recipe"})
    }
})


module.exports = router