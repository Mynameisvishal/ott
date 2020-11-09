import React from 'react';
import {
    Grid,
    Form,
    Segment,
    Button,
    Header,
    Message,
  } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Register.css";

class Register extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        errors: [],
        loading: false,
        
    };

  isFormValid = () => {
    let errors = [];
    let error;

    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill in all fields" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (!this.isPasswordValid(this.state)) {
      error = { message: "Password is invalid" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };

  isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
    return (
      !username.length ||
      !email.length ||
      !password.length ||
      !passwordConfirmation.length
    );
  };

  isPasswordValid = ({ password, passwordConfirmation }) => {
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  };

  displayErrors = errors =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.isFormValid()) {
      this.setState({ errors: [], loading: true });
        const users = JSON.parse(localStorage.getItem("users"));
        if (users) {
            const user = {
                user2: {
                    email: this.state.email,
                    password: this.state.password,
                },
                
            }
            const add = {...users,...user};
            console.log(users)
            console.log(add);
            localStorage.setItem("users", JSON.stringify(add));
            console.log(localStorage.getItem('users'));
            this.setState({ loading: false })
            localStorage.setItem("logedin", "true");
            this.props.history.push('/');
        } else {
            const user = {
                user1: {
                    email: this.state.email,
                    password: this.state.password,
                },
                
            }
            localStorage.setItem("users", JSON.stringify(user));
            console.log(localStorage.getItem('users'));
            this.setState({ loading: false })
            localStorage.setItem("logedin", "true");
            this.props.history.push('/');
        }
    }
  };
  handleInputError = (errors, inputName) => {
    return errors.some(error => error.message.toLowerCase().includes(inputName))
      ? "error"
      : "";
  }; 
  render() {
    const {
      username,
      email,
      password,
      passwordConfirmation,
      errors,
      loading
    } = this.state;
    
    return (
      <React.Fragment>
        <h1 className="register__logo">MOVIE BUZZ</h1>
        <Grid textAlign="center" verticalAlign="middle" className="register__form">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h1" icon color="orange" textAlign="center">
                       
              Register for Movie Buzz
          </Header>
            <Form onSubmit={this.handleSubmit} size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  name="username"
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  onChange={this.handleChange}
                  value={username}
                  type="text"
                />

                <Form.Input
                  fluid
                  name="email"
                  icon="mail"
                  iconPosition="left"
                  placeholder="Email Address"
                  onChange={this.handleChange}
                  value={email}
                  className={this.handleInputError(errors, "email")}
                  type="email"
                />

                <Form.Input
                  fluid
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  onChange={this.handleChange}
                  value={password}
                  className={this.handleInputError(errors, "password")}
                  type="password"
                />

                <Form.Input
                  fluid
                  name="passwordConfirmation"
                  icon="repeat"
                  iconPosition="left"
                  placeholder="Password Confirmation"
                  onChange={this.handleChange}
                  value={passwordConfirmation}
                  className={this.handleInputError(errors, "password")}
                  type="password"
                />

                <Button
                  disabled={loading}
                  className={loading ? "loading" : ""}
                  color="orange"
                  fluid
                  size="large"
                >
                  Submit
                    </Button>
              </Segment>
            </Form>
            {errors.length > 0 && (
              <Message error>
                <h3>Error</h3>
                {this.displayErrors(errors)}
              </Message>
            )}
            <Message>
              Already a user? <Link to="/login">Login</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    )
  }
}

export default Register
