import React, { Component } from 'react'
import Page from '../../Page'
import { Grid, Typography, Card, CardActionArea,CardActions, CardMedia, CardContent, Button, Link } from '@material-ui/core'
import {info, userinfo} from './actions'

import './info.css'

export default class extends Component {
    constructor(){
        super()
        this.state = {
            recipe:[],
            user:[],
            loading:true
        }
    }

    async componentDidMount(){
        const recipeid = this.props.match.params.recipeid
        let recipeInfo = await info(recipeid)
        this.setState({
            recipe:recipeInfo
        })

        const userid = this.state.recipe.user
        var userData = await userinfo(userid)
        this.setState({
            user:userData  
        })
        
    }


    render(){
        const {title,ingredients,preparation,servingSize,calories,recipeImage} = this.state.recipe
        const {name} = this.state.user
        const imgURL = `https://re-c-psappapi.herokuapp.com/${recipeImage}`
        return(
            <Page
                showHeader={true}
                showFooter={true}
                title={"Information"}
            >
                <div className="infoContainer">
                    <Typography variant="h2">{title}</Typography>
                    <Typography>Created by: {name}</Typography>
                </div>
                    <Grid container justify="center" alignItems="center" spacing={2}>
                        <Grid item sm={6} xs={12} md={4}>
                            <Card variant="outlined" style={{minWidth:275,minHeight:450, padding:5, textAlign: 'center', alignItems:'center',justifyContent:'center', display:'flex',flexDirection:'column', backgroundColor:'#DCEDC8'}} >  
                                <CardActionArea>
                                    <CardMedia
                                    style={{height:350}}
                                    image={imgURL}
                                    />
                                <CardContent>
                                    <Typography variant="h5">Ingredients:</Typography>
                                    <Typography variant="body1" color="textPrimary" component="p">
                                        {ingredients}
                                    </Typography>
                                    <br/>
                                    <Typography variant="h5">Preparation:</Typography>
                                    <Typography variant="body1" color="textPrimary" component="p">
                                        {preparation}
                                    </Typography>
                                    <br/>
                                    <Typography variant="h5">Servings:</Typography>
                                    <Typography variant="body1" color="textPrimary" component="p">
                                        {servingSize} people
                                    </Typography>
                                    <br/>
                                    <Typography variant="h5">Calories:</Typography>
                                    <Typography variant="body1" color="textPrimary" component="p">
                                        {calories}cal
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                                <CardActions>
                                <Button variant='contained' size="large" color="primary">
                                    <Link color="textPrimary" href={"/"}>
                                        Return Home
                                    </Link>
                                </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                
            </Page>
        )
    }
}