import React, { Component } from 'react'
import Page from '../../Page';
import {postNew} from './actions'
import './profile.css'

import {Grid , TextField, Typography, Button, Container } from '@material-ui/core'

export default class extends Component{
    constructor(){
        super()
        this.state = {
            title:'',
            ingredients:'',
            preparation:'',
            servingSize:'',
            calories:'',
            recipeImage:null
        }

        this.onTextChange = this.onTextChange.bind(this)
        this.onClickButton = this.onClickButton.bind(this)
        this.onFileChange = this.onFileChange.bind(this)
    }

    onTextChange(e){
        const {name, value} = e.target
        this.setState({
            [name]:value
        })
    }

    async onClickButton(){
        const recipe = new FormData()
        recipe.append('recipeImage', this.state.recipeImage, this.state.recipeImage.name)
        try {
            let recipeData = await postNew(
                this.state.title,
                this.state.ingredients,
                this.state.preparation,
                this.state.servingSize,
                this.state.calories,
                recipe
            )
            alert("New recipe added successfully!")
            window.location.reload()
        } catch (error) {
            alert("ERROR: Unable to post new recipe!")
            console.log(error);
        }
    }

    onFileChange = event =>{
        this.setState({
            recipeImage: event.target.files[0]
        })
        
    }

    render(){
        return(
            <Page
            showHeader={true}
            showFooter={true}
            title={"Post Your Recipe"}
            >
                <Container component="main" >
                    <div className="paper">

                        <Typography variant="h4">New Recipe</Typography>

                        <form className="loginForm">

                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="title"
                                    label="Title"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.onTextChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="ingredients"
                                    label="Ingredients"
                                    placeholder="10 Lines Max"
                                    name="ingredients"
                                    multiline
                                    rows={8}
                                    rowsMax={10}
                                    value={this.state.ingredients}
                                    onChange={this.onTextChange}
                                />
                            </Grid>

                            <Grid item xs={12} >
                                <TextField
                                    variant="filled"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="preparation"
                                    label="Preparation"
                                    placeholder="10 Lines Max"
                                    name="preparation"
                                    multiline
                                    rows={8}
                                    rowsMax={10}
                                    value={this.state.preparation}
                                    onChange={this.onTextChange}
                                />
                            </Grid>

                            <Grid item xs={12} >
                                <TextField
                                    variant="filled"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="servingSize"
                                    label="Servings"
                                    name="servingSize"
                                    type="number"
                                    placeholder="Number of People that will be able to eat"
                                    value={this.state.servingSize}
                                    onChange={this.onTextChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="calories"
                                    label="Calories"
                                    name="calories"
                                    type="number"
                                    placeholder="Amount of calories"
                                    value={this.state.calories}
                                    onChange={this.onTextChange}
                                />
                            </Grid>

                            <Grid item xs={12} >
                                <Typography variant="h5">Image:</Typography>
                                <TextField
                                    variant="filled"
                                    margin="normal"
                                    required
                                    fullWidth
                                    type="file"
                                    placeholder="Image"
                                    onChange={this.onFileChange}
                                />
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={this.onClickButton}
                            >
                                Post
                            </Button>

                            
                        </form>
                    </div>
                </Container>
            </Page>
        )
    }
}