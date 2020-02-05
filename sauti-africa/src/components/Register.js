import React from "react";
import axios from 'axios';

class Register extends React.Component {

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
  
  register = e => {
    e.preventDefault();
    axios
      .post('real-sauti-studio.herokuapp.com/api/auth/register', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('real-sauti-studio.herokuapp.com/api/users');
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <h1>Welcome to the Sauti Africa!</h1>
        <form onSubmit={this.register}>
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
          <button type="submit">Register</button>
        </form>
      </div>
    
   );
  };
}
export default Register;