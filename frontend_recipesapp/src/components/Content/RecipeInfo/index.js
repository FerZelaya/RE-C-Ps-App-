import React, { Component } from 'react'
import Page from '../../Page'
import { Grid, Typography } from '@material-ui/core'
import {info} from './actions'

export default class extends Component {
    constructor(){
        super()
        this.state = {
            recipe:[],
            loading:true
        }
    }

    async componentDidMount(){
        const recipeid = this.props.match.params.recipeid
        let recipeInfo = await info(recipeid)
        this.setState({
            recipe:recipeInfo
        })
    }


    render(){
        const {title,ingredients,preparation,servings,calories,recipeImage,user} = this.state.recipe
        return(
            <Page
                showHeader={true}
                showFooter={true}
                title={"Information"}
            >
                <Grid container justify="center" alignItems="center">
                    <Grid item>
                        <Typography variant="h2">{title}</Typography>
                        <Typography variant="h5">{user}</Typography>
                    </Grid>
                </Grid>

            </Page>
        )
    }
}