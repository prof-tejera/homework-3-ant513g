import { Component } from 'react';
import './LoginForm.css';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

class LoginForm extends Component {
  render() {
    return (
      <form>
        <div><input placeholder="Username" /></div>
        <div><input placeholder="Password" /></div>
        <button>Hello</button>
      </form>
    )
  }
}

export default LoginForm;
