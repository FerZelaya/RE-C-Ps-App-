const db = require('../../dao/db')
const ObjectId = require('mongodb').ObjectId

let recipesColl

module.exports = class {
    //initmodel
    static async initModel(){
        if(!recipesColl){
            let _db = await db.getDB()
            recipesColl = await _db.collection('recipes')
            console.log("Recipes collection created")
            return
        } else {
            return
        } 
    }

    //Show all recipes
    static async showAllRecipes(){
        try{
            if(recipesColl){
                let recipes = await recipesColl.find()
                return recipes.toArray()
            }
            return[]
        }catch(error){
            console.log(error);
            return errorS
        }
    }

    //Post own recipe
    static async postRecipe(title, ingredients, preparation, servingSize, calories){
        try {
            let newRecipe = {
                title:title,
                ingredients:ingredients,
                preparation:preparation,
                servingSize:servingSize,
                calories:calories
            }
            let result = await recipesColl.insertOne(newRecipe)
            return result            
        } catch(error){
            console.log(error);
            return error
        }

    }


}




