import axios from 'axios'

const publicaxios = axios.create()

publicaxios.defaults.headers.common['cache-control'] = "no-cache"
publicaxios.defaults.headers.post['Content-Type'] = "no-cache"
publicaxios.defaults.headers.put['Content-Type'] = "no-cache"


const privateaxios = axios.create()

privateaxios.defaults.headers.common['cache-control'] = "no-cache"
privateaxios.defaults.headers.post['Content-Type'] = "no-cache"
privateaxios.defaults.headers.put['Content-Type'] = "no-cache"

const privatePostAxios = axios.create()

privatePostAxios.defaults.headers.post['Content-Type'] = "multipart/form-data"

//Set json web token to axios private instance
export const setJWT = (jwt)=>{
    privateaxios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`
    privatePostAxios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`
}

export const naxios = publicaxios
export const paxios = privateaxios
export const ppaxios = privatePostAxios

//Auth Interceptor
export const AuthInterceptor = (logouthandler) => {
    privateaxios.interceptors.response.use(
        (response)=>{
            return response
        },
        (error)=>{
            console.log(error);
            if(error.response){
                switch(error.response.status){
                    case 401:
                        logouthandler()
                        break
                    default:
                        console.log(error);
                }
            }else{
                console.log(error);
            }
            return Promise.reject(error)
        }
    )
}


const localStorageAvailable = (
    ()=>{
        let s="s"
        try{
            localStorage.setItem(s,s)
            localStorage.removeItem(s)
            return true
        }catch(error){
            return false
        }
    }
)()


//Set jwt to local storage
export const getLocalStorage = (key) => {
    if(localStorageAvailable){
        return localStorage.getItem(key)

    }else{
        return null
    }
}

export const setLocalStorage = (key, value) => {
    if(localStorageAvailable){
        localStorage.setItem(key, value)
        return true
    }else{
        return false
    }
}

export const removeLocalStorage = (key) => {
    if(localStorageAvailable){
        localStorage.removeItem(key)
        return true
    }else{
        return false
    }
}