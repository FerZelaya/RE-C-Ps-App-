import React, {Component} from 'react';
import Page from '../../Page';
import {showAll} from './actions'

import {Grid , Card, Typography, Button, CardActions, CardActionArea, CardContent, CardMedia, Link} from '@material-ui/core'



export default class extends Component {
    constructor(){
      super()
      
      this.state = {
        recipes:[]
      }

    }

     async componentDidMount(){
        try {
          let result = await showAll()
          this.setState({
            recipes:result
          })
        } catch (error) {
          console.log(error);
        }
     }



    render(){
      const recipesList = this.state.recipes.map((item)=>{
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
                </CardActions>
              </Card>
            </Grid>
        )
      })
      return (
        <Page
          showHeader={true}
          showFooter={true}
          title={"RE-C-Ps"}
        >
          <Grid container spacing={2}>
              {recipesList}
          </Grid>


        </Page>
      )
    }
  }