import { Component, Profiler } from 'react';
import './LoginForm.css';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Panel from 'components/Panel/Panel';

class LoginForm extends Component {
  render() {
    return (
      <Panel backgroundColor="blue">
        <div className="form">
          <h2>Login</h2>
          <Input type="email" name="Email" labelName="Email" placeholder="Enter your Email" className="text-input"/>
          <Input type="password" name="Password" labelName="Password" placeholder="Enter your Password" className="text-input" />
          <Button text="Submit" onClick={() => { }} />
          <p>Not registered? <a href="#">Create an account</a></p>
        </div>
      </Panel>
    );
  }
}

export default LoginForm;