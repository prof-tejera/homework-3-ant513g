import { Component } from 'react';
import Button from 'components/Button/Button';
import Panel from 'components/Panel/Panel';


class Input extends Component {
  render() {
    const { placeholder, name } = this.props;
    return (
      <Panel backgroundColor="blue">
        <input placeholder="text"/>;
      </Panel>
    )
  }
}

export default Input;
