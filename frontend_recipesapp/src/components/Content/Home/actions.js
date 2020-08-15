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