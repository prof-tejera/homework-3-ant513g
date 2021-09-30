import { Component } from 'react';
import './RadioButtons.css';
import Panel from 'components/Panel/Panel';
import Button from 'components/Button/Button';

class RadioButtons extends Component {
  render() {
    const { className, type, value, name } = this.props;
    const list = ['Apple', 'Pear', 'Orange'];
    return (
      <Panel backgroundColor="blue">
        <form>
          <div className="radio-panel">
            <input type="radio" value="Apple" name="fruit" checked></input>
            <label for="Apple">Apple</label>

            <input type="radio" value="Pear" name="fruit"></input>
            <label for="Pear">Pear</label>

            <input type="radio" value="Orange" name="fruit"></input>
            <label for="Orange">Orange</label>
          </div>
        </form>
      </Panel>
    );
  }
}

export default RadioButtons;
