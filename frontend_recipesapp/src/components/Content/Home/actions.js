import {paxios} from '../../utilities/axios' 


export const showAll = async () => {
    try{
        const {data} = await paxios.get(
            "https://re-c-psappapi.herokuapp.com/api/recipes/showAll"
        )
        return data
    }catch(error){
        throw(error)
    }
}