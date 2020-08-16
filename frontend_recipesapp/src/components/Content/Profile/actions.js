import {paxios} from '../../utilities/axios' 


export const showAll = async (email, password) => {
    try{
        const {data} = await paxios.get(
            "/api/recipes/showAll"
        )
        return data
    }catch(error){
        throw(error)
    }
}

export const postNew = async (title, ingredients, preparation, servingSize, calories, recipeImage)=>{
    try {
        const {data} = await paxios.post(
            "/api/recipes/postRecipe",
            {
                title:title,
                ingredients:ingredients,
                preparation:preparation,
                servingSize:servingSize,
                calories:calories,
                recipeImage:recipeImage
            }
        )
        return data
    } catch (error) {
        throw error
    }
}