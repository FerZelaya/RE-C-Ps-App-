import React, { Component } from 'react'
import Page from '../../Page';
import './profile.css'

import {showAlluser, deleteOne} from './actions'

import {Grid , Card, Typography, Button, CardActions, CardActionArea, CardContent, CardMedia, Link, IconButton} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'


export default class extends Component {
    constructor(){
      super()
      
      this.state = {
        recipes:[],
        recipeid:''
      }

      this.deleteButtonPressed = this.deleteButtonPressed.bind(this)
    }

     async componentDidMount(){
        try {
          let result = await showAlluser()
          this.setState({
            recipes:result
          })
        } catch (error) {
          console.log(error);
        }
     }

     async deleteButtonPressed(recipeID){
       try {
         let result = await deleteOne(recipeID)
         console.log(result);
         window.location.reload()
       } catch (error) {
         console.log(error);
       }
     }



    render(){
      const recipesList = this.state.recipes.map((item)=>{
        const recipeID = item._id
        const imgURL = `http://localhost:3000/${item.recipeImage}`
        return (
          <Grid item sm={6} xs={12} md={4} key={item._id}>
              <Card variant="outlined" style={{minWidth: 275,minHeight:450, padding:5, textAlign: 'center', alignItems:'center',justifyContent:'center', display:'flex',flexDirection:'column', backgroundColor:'#DCEDC8'}} >  
                  <CardActionArea>
                    <CardMedia
                      style={{height:350}}
                      image={imgURL}
                    />
                  <CardContent>
                    <Typography color="textPrimary" variant='h5'>
                      {item.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions >
                  <Button variant='contained' size="large" color="primary">
                      <Link color="textPrimary" href={`/recipeinfo/${item._id}`}>
                        More information
                      </Link>
                  </Button>

                  <IconButton onClick={() => this.deleteButtonPressed(recipeID)}>
                    <DeleteIcon/>
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
        )
      })
      return (
        <Page
          showHeader={true}
          showFooter={true}
          title={"Profile"}
        > 
            <div className="profileContainer">
                <Button variant="contained" color="secondary" href="/postRecipe" style={{marginBottom:30}}>
                    Post a new Recipe!
                </Button>
                <Typography variant="h4" color="primary">My Recipes:</Typography>
            </div>
                        
            <Grid container spacing={2}>
                {recipesList}
            </Grid>
        </Page>
      )
    }
  }