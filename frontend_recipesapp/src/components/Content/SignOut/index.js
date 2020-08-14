import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import Page from '../../Page'
import { Grid, Button, Typography, Container } from '@material-ui/core'

import './signout.css'



export default class extends Component{

    constructor(){
        super()
        this.state = {
            redirectTo: false
        }
        
        this.onClickSignOut = this.onClickSignOut.bind(this)
    }

    onClickSignOut(){
        this.setState({redirectTo:true}, ()=>{this.props.auth.logout()})
    }

    render(){
        if(this.state.redirectTo){
            const url = (this.props.location.state) ? this.props.location.state.from.pathname : '/'
            return (
                <Redirect to={url}/>
            )
        }

        return(
            <Page
                showHeader={true}
                showFooter={true}
                title={"Login"}
            >
                <Container component="main" maxWidth="xs">
                    <div className="paper">
                        <Grid container justify="center" alignItems="center">
                            <Grid item xs={12} sm={12}>
                                <Typography variant="h4">You can Sign Out by clicking the button below</Typography>
                                <Button onClick={this.onClickSignOut} variant="contained" color="secondary" size="medium" fullWidth style={{marginTop:40}}>
                                    Sign Out
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
                
            </Page>
        )
    }
}