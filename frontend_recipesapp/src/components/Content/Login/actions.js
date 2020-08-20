import {naxios} from '../../utilities/axios'

export const signIn = async (email, password) => {
    try{
        const {data} = await naxios.post(
            "https://re-c-psappapi.herokuapp.com/api/sec/signin",
            {
                email: email,
                password:password
            }
        )
        return data
    }catch(error){
        throw(error)
    }
}