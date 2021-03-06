import {naxios} from '../../utilities/axios'

export const signUp = async (name,email, password) => {
    try{
        const {data} = await naxios.post(
            "https://re-c-psappapi.herokuapp.com/api/sec/signup",
            {
                name:name,
                email: email,
                password:password
            }
        )
        return data
    }catch(error){
        throw(error)
    }
}