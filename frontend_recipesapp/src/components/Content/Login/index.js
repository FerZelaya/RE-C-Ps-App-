import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Page from '../../Page'
import {signIn} from './actions'

import './login.css'

import {
    Grid, Typography, Button, TextField, Container, Link
} from '@material-ui/core'



export default class extends Component {
    constructor(){
        super()

        this.state = {
            email:'',
            password:'',
            redirectTo: false
        }

        this.onTextChange = this.onTextChange.bind(this)
        this.onClickButton = this.onClickButton.bind(this)
    }

    onTextChange(e){
        const {name, value} = e.target
        this.setState({
            [name]:value
        })
    }

    async onClickButton(e){
        e.preventDefault()
        try{
            let userData = await signIn(this.state.email, this.state.password)
            const {jwt}  = userData
            delete userData.jwt
            this.setState({redirectTo:true}, ()=>{this.props.auth.login(userData,jwt)})
            alert("Log In successfull.")
            window.location.reload()
        }catch(error){
            alert("ERROR: Unable to sign in!")
            console.log(error);
        }
    }

    render(){
        if(this.state.redirectTo){
            const url = '/profile'
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

                        <Typography variant="h4">Login</Typography>

                        <form className="loginForm">

                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={this.state.email}
                                    onChange={this.onTextChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.onTextChange}
                                />
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={this.onClickButton}
                            >
                                Sign In
                            </Button>

                            <Grid container justify="center">
                                <Grid item >
                                    <Typography variant="h6" ><Link href="/signup">Create an account!</Link></Typography>
                                </Grid>
                            </Grid>

                        </form>
                    </div>
                </Container>
            </Page>
        )
    }

    
}



