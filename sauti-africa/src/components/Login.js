import React from "react";
import axios from 'axios';

class Login extends React.Component {

  state = {
    credentials: {
      name: '',
      password: ''
    }
  };
  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };
  
  login = e => {
    e.preventDefault();
    console.log("creds2", this.state.credentials)
    axios
      .post('https://real-sauti-studio.herokuapp.com/api/auth/login', this.state.credentials)
      .then(res => {
        console.log("creds", this.state.credentials)
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/dashboard');
      })
      .catch(err => console.log(err.response));
  };
  render() {
    return (
      <div>
        <h1>Welcome to the Sauti Africa!</h1>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="name"
            value={this.state.credentials.name}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    
   );
  };
}
export default Login;