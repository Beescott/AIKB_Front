import React from "react";
import { Redirect } from "react-router-dom";

class AddPhoneButton extends React.Component {
  state = {
    redirect: false
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/add-form" />;
    }
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>
          Ajouter un nouveau smartphone
        </button>
      </div>
    );
  }
}

export default AddPhoneButton;
