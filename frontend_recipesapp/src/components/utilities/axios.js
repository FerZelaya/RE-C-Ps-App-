import axios from 'axios'

const publicaxios = axios.create()

publicaxios.defaults.headers.common['cache-control'] = "no-cache"
publicaxios.defaults.headers.post['Content-Type'] = "no-cache"
publicaxios.defaults.headers.put['Content-Type'] = "no-cache"


const privateaxios = axios.create()

privateaxios.defaults.headers.common['cache-control'] = "no-cache"
privateaxios.defaults.headers.post['Content-Type'] = "no-cache"
privateaxios.defaults.headers.put['Content-Type'] = "no-cache"

//Set json web token to axios private instance
export const setJWT = (jwt)=>{
    privateaxios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`
}

export const naxios = publicaxios
export const paxios = privateaxios