import React, { Component, useEffect, useState } from "react";
import "./App.css";
import DeviceList from "./Components/PresentationalComponents/DeviceList";
import System from "./Components/PresentationalComponents/System";
import { Smartphones } from "./Components/SmartphoneList"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smartphones: null,
            mockSmartphone: [
                { name: 'oneplus7', connectivity: 'Bluetooth' },
                { name: 'iPhone X', connectivity: 'Bluetooth' }
            ],
            mockSystem: [
                { name: 'Samsung Galaxy', connectivity: 'Wifi'}
            ]
        };
    }

    componentDidMount() {
        fetch("/get_smartphones").then(response =>
            response.json().then(data => {
                this.setState({ smartphones: data.smartphones })
            })
        );
    }

    deleteSmartphoneFromSystem = (index) => {
        this.addSmartphoneToDeviceList(this.state.mockSystem[index]);
        
        // Remove smartphone from mock system
        const newMockSystem = Object.assign([], this.state.mockSystem);
        newMockSystem.splice(index, 1);
        this.setState({mockSystem: newMockSystem});
    }

    addSmartphoneToDeviceList = (smartphone) => {
        const newMockSmartphone = Object.assign([], this.state.mockSmartphone);
        newMockSmartphone.push(smartphone);
        this.setState({mockSmartphone: newMockSmartphone});
    }

    addSmartphoneToSystem = (smartphone) => {
        const newMockSystem = Object.assign([], this.state.mockSystem);
        newMockSystem.push(smartphone);
        this.setState({mockSystem: newMockSystem});
    }

    DeleteSmartphoneFromDeviceList = (index) => {
        this.addSmartphoneToSystem(this.state.mockSmartphone[index]);

        const newMockSmartphone = Object.assign([], this.state.mockSmartphone);
        newMockSmartphone.splice(index, 1);
        this.setState({mockSmartphone: newMockSmartphone});
    }

    render() {
        const { smartphones } = this.state;
        return (
            <div className="App">
                <div style={{ float: 'left' }}>
                    {this.state && this.state.smartphones &&
                        <Smartphones smartphones={smartphones} />
                    }
                </div>
                <div style={{ float: 'right' }}>
                    <DeviceList 
                        devices={this.state.mockSmartphone} 
                        delEvent={this.DeleteSmartphoneFromDeviceList}
                    />
                    <System devices={this.state.mockSystem}
                        delEvent={this.deleteSmartphoneFromSystem}
                    />
                </div>
            </div>
        );
    }
}

export default App;
