import React, {Component} from 'react';
import Page from '../../Page';


import {Grid , Card, Typography, Button, CardActions, CardActionArea, CardContent, CardMedia} from '@material-ui/core'



export default class extends Component {
    render(){
      return (
        <Page
          showHeader={true}
          showFooter={true}
          title={"RE-C-Ps"}
        >
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12} md={4}>
              <Card variant="outlined" style={{minWidth: 275,minHeight:450, padding:5, textAlign: 'center', alignItems:'center',justifyContent:'center', display:'flex',flexDirection:'column', backgroundColor:'#DCEDC8'}} >  
                  <CardActionArea>
                    <CardMedia
                      style={{height:350}}
                      image="/pollohorneado.jpg"
                      title="Pollo Horneado"
                    />
                  <CardContent>
                    <Typography color="textPrimary" variant='h5'>
                      Pollo Horneado
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions >
                  <Button variant='contained' size="large" color="primary">More information</Button>
                </CardActions>
              </Card>
            </Grid>


            
            
             

          </Grid>


        </Page>
      )
    }
  }