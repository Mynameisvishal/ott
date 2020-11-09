import React, { Component } from 'react';
import { Message, Form, Button} from "semantic-ui-react";
import "./Login.css";
import { Link } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            email: "",
            password: "",
            adminMail: "",
            adminPassword: "",
            wrongDetials: false,
        };
    }

    onSubmit = () => {
        const { email, password } = this.state;
        if (this.state.adminMail == 'root@gmail.com' && this.state.adminPassword == 'root123') {
            localStorage.setItem('admin', 1);
            localStorage.setItem('logedin', "true");
            this.props.history.push('/')
        }
        if (localStorage.getItem("users")) {
            const users = JSON.parse(localStorage.getItem("users"));
            console.log(users);

            for (const [key, value] of Object.entries(users)) {
                

                if (value.email == email && value.password == password) {
                    const add = {
                        email: email,
                        password: password
                    }
                    const user = { ...users, ...add };
                    localStorage.setItem('users', JSON.stringify(user));
                    localStorage.setItem('logedin', 'true');
                    this.props.history.push('/')
                     
                } else {
                    this.setState({ wrongDetials: true });
                }
            }
        }
    }

    componentWillMount() {
        const logedin = JSON.parse(localStorage.getItem('logedin'));
        if (logedin === true) {
            this.props.history.push('/');
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }

    render() {
        const { wrongDetials } = this.state;
        return (
            <div className="login__body">
                <h1 className="login__logo">MOVIE BUZZ</h1>
                <div className="login__segment">
                    
                    <div className="login__flex">

                        <div className="login__sub">
                            <h1 className="login__header"> Subscriber Login</h1>
                            <Form>
                                <Form.Input name="email" onChange={this.handleChange} type="email" label='Email' placeholder='Enter mail id' />
                                <Form.Input name="password" onChange={this.handleChange} type="password" label='Password' placeholder='Enter password' />
                                <Button disabled={wrongDetials} color='green' name="subscriberSubmit" onClick={this.onSubmit} type='submit'>Submit</Button>
                                {wrongDetials ? <small>Enter a valid mail and password</small> : ""}
                                
                            </Form>

                        </div>
                    
                        <div className="login__admin">
                            <h1 className="login__header">Admin Login</h1>
                            <Form>
                                <Form.Input name="adminMail" onChange={this.handleChange} type="email" label='Email' placeholder='Enter mail id' />
                                <Form.Input name="adminPassword" onChange={this.handleChange} type="password" label='Password' placeholder='Enter password' />
                                <Button color='green' name="adminSubmit" type='submit' onClick={this.onSubmit}>Submit</Button>
                            </Form>
                        </div>
                    </div>
                    <div className="login__footer">
                        <Message>
                            Don't have an account <Link to="/register">Register Here</Link>.
                    </Message>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
