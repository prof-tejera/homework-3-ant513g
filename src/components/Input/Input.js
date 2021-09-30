import { Component } from 'react';
import Button from 'components/Button/Button';
import Panel from 'components/Panel/Panel';
import './Input.css';


class Input extends Component {
  render() {
    const { labelName, props, type, placeholder, name, value, className, required, checked} = this.props;
    const handleClick = (value) => {
      console.log({ value });
    };
    return (
      <>
        <span>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          className={className}
          onClick={() => {
                    handleClick(value);
            }}
          required
        />
        <label
          className={className}
          for={value}>
          {labelName}
        </label>
        </span>
      </>
    );
  }
}

export default Input;
