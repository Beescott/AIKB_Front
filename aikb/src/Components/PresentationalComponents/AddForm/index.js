import React from "react";
import Header from "../Header";
import "./index.css";

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      os: "",
      radio: "",
      bluetooth: "",
      nfc: "",
      gps: "",
      usb: "",
      _3g_bands: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    fetch(`/post_new_smartphone`, {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ smartphone: this.state })
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="add-form">
        <Header />
        <form onSubmit={this.handleSubmit}>
          <table>
            <tr>
              <td>
                <label htmlFor="name">Nom de l'appareil&nbsp;:</label>
              </td>
              <td>
                <input type="text" name="name" onChange={this.handleChange} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="os">Système d'Exploitation&nbsp;:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="os"
                  name="os"
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="bluetooth">Bluetooth&nbsp;:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="bluetooth"
                  name="bluetooth"
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="nfc">NFC&nbsp;:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="nfc"
                  name="nfc"
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="gps">GPS&nbsp;:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="gps"
                  name="gps"
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="usb">USB&nbsp;:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="usb"
                  name="usb"
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="_3g_bands">3G / 4G / Edge&nbsp;:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="_3g_bands"
                  name="_3g_bands"
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="radio">Radio&nbsp;:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="radio"
                  name="radio"
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <input type="submit" value="Envoyer" />
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

export default AddForm;
