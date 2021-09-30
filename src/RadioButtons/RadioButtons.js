import { Component } from 'react';
import './RadioButtons.css';
import Panel from 'components/Panel/Panel';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import 'components/Input/Input.css';

class RadioButtons extends Component {
  render() {
    const { className, type, value, name, handleClick} = this.props;
  return (
      <Panel backgroundColor="blue">
        <Input type="radio" name="fruit" value="Apple"  labelName="Apple" onChange={handleClick} className="radio-input" checked />
        <Input type="radio" name="fruit" value="Pear" labelName="Pear" onChange={handleClick} className="radio-input" />
        <Input type="radio" name="fruit" value="Orange" labelName="Orange" onChange={handleClick} className="radio-input" />
      </Panel>
    );
  }
}

export default RadioButtons;
