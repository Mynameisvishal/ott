import React, { Component } from 'react';
import Nav from '../Nav';
import { Segment, Form, Button, Input } from "semantic-ui-react";
import "./Login.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            email: "",
            password: "",
            adminMail: "",
            adminPassword: ""
        }
    }
    onSubmit = () => {
        localStorage.setItem('logedin', true);  
        console.log(localStorage.getItem('logedin'));
        this.props.history.push('/')
    }
    componentWillMount() {
        // const history =
        const logedin = JSON.parse(localStorage.getItem('logedin'));
        if(logedin){
            this.props.history.push('/');
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});

        console.log(this.state);
    }

    render() {
        return (
            <div>
            <Nav />
            <Segment className="login__segment">
                <div className="login__flex">

                    <div className="login__sub">
                        <h1 className="login__header"> Subscriber Login</h1>
                        <Form>
                            <Form.Input name="email" onChange={this.handleChange} type="email" label='Email' placeholder='Enter mail id' />
                            <Form.Input name="password" onChange={this.handleChange} type="password" label='Password' placeholder='Enter password' />
                            <Button color='green' name="subscriberSubmit" type='submit'>Submit</Button>
                        </Form>

                    </div>
                    
                    <div className="login__admin">
                    <h1 className="login__header">Admin Login</h1>
                        <Form>
                            <Form.Input name="adminMail" type="email" label='Email' placeholder='Enter mail id' />
                            <Form.Input name="adminPassword" type="password" label='Password' placeholder='Enter password' />  
                                <Button color='green' name="adminSubmit" type='submit' onClick={this.onSubmit}>Submit</Button>
                        </Form>
                    </div>
                </div>
                <div className="login__footer">
                    Don't have an account <button className="login__footerbtn" >Register Here</button>.
                </div>
            </Segment>
        </div>
        )
    }
}

export default Login
