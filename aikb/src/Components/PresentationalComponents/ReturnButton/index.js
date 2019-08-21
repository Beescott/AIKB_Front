import React from "react";
import { Redirect } from "react-router-dom";

class ReturnButton extends React.Component {
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
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Retour</button>
      </div>
    );
  }
}

export default ReturnButton;
