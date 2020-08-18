import {paxios} from '../../utilities/axios' 


export const info = async (recipeid) => {
    try{
        const {data} = await paxios.get(
            `/api/recipes/info/${recipeid}`
        )
        return data
    }catch(error){
        throw(error)
    }
}