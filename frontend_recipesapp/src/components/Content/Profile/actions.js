import {ppaxios, paxios} from '../../utilities/axios' 


export const showAlluser = async () => {
    try{
        const {data} = await paxios.get(
            "https://re-c-psappapi.herokuapp.com/api/recipes/showUserRecipes"
        )
        return data
    }catch(error){
        throw(error)
    }
}

export const postNew = async (recipeFormData)=>{
    
    try {
        const {data} = await ppaxios.post(
            "https://re-c-psappapi.herokuapp.com/api/recipes/postRecipe",
            recipeFormData
        )
        return data
    } catch (error) {
        throw error
    }
}

export const deleteOne = async (recipeid) => {
    try{
        const {data} = await paxios.delete(
            `https://re-c-psappapi.herokuapp.com/api/recipes/deleteRecipe/${recipeid}`
        )
        return data
    }catch(error){
        throw(error)
    }
}