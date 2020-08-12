import React from 'react'
import {Route} from 'react-router-dom'


export default (props) => {
    const {component: CustomComponent, auth, ...rest} = props

    return(
        <Route
            {...rest}
            component={
                (props) => {
                    return(
                        <CustomComponent {...props} auth={auth}/>
                    )
                }
            }
        
        />
    )
}