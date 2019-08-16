import React from "react";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      label: props.label
    };
  }
  render() {
    return (
      <tr>
        <td>
          <label htmlFor={this.state.name}>{this.state.label}</label>
        </td>
        <td>
          <input type="text" id={this.state.name} name={this.state.name} />
        </td>
      </tr>
    );
  }
}

export default InputForm;
