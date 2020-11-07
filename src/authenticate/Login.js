import React, { Component } from 'react';
import Nav from '../Nav';
import { Segment, Form, Button, Input } from "semantic-ui-react";
import "./Login.css";



export class Login extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);

    }
    
    onSubmit = () => {
        // console.log('clicked');
        localStorage.setItem('logedin', true);  
        console.log(localStorage);
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
                            <Form.Input name="subscriberMail" type="email" label='Email' placeholder='Enter mail id' />
                            <Form.Input name="subscriberPassword" type="password" label='Password' placeholder='Enter password' />  
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
