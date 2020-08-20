import React, {Component} from 'react';
import Page from '../../Page';
import {showAll} from './actions'

import {Grid , Card, Typography, Button, CardActions, CardActionArea, CardContent, CardMedia, Link} from '@material-ui/core'
import {FaLongArrowAltDown} from 'react-icons/fa'



export default class extends Component {
    constructor(){
      super()
      
      this.state = {
        recipes:[],
        noRecipes:true
      }

    }

     async componentDidMount(){
        try {
          let result = await showAll()
          if((result !== undefined || result.length !== 0)){
            this.setState({
              recipes:result,
              noRecipes:false
            })
          }
          
          
        } catch (error) {
          console.log(error);
        }
     }



    render(){

      const recipesList = this.state.recipes.map((item)=>{
        const imgURL = `https://re-c-psappapi.herokuapp.com/${item.recipeImage}`
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

      if(this.state.noRecipes){
        return(
          <Page
          showHeader={true}
          showFooter={true}
          title={"RE-C-Ps"}
          >
            <Grid container justify="center" alignItems="center">
              <Grid item xs={12} lg={6} style={{textAlign:"center"}}>
                <Typography variant="h3">No one has posted a recipe yet...</Typography>
                <br/><br/><br/><br/><br/><br/>
                <Typography variant="h3">You can post your own in the profile tab below</Typography>
                
              </Grid>
              <FaLongArrowAltDown size="5em"/>
            </Grid>
          </Page>
        )
        
      }else{
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
      
      
}