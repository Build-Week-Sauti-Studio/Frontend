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
    axios
      .post('https://real-sauti-studio.herokuapp.com/api/auth/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/dashboard');
      })
      .catch(err => console.log(err));
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