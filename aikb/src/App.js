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
            ],
            mockSystem: [
            ]
        };
    }

    componentDidMount() {
        fetch("/get_smartphones").then(response =>
            response.json().then(data => {
                this.setState({ smartphones: data.smartphones });
                this.setState({mockSmartphone: data.smartphones});
            })
        );
    }

    deleteSmartphoneFromSystem = (index) => {
        // Remove smartphone from mock system
        const newMockSystem = Object.assign([], this.state.mockSystem);
        newMockSystem.splice(index, 1);
        this.setState({mockSystem: newMockSystem});

        this.updateDeviceList(newMockSystem);
    }

    addSmartphoneToSystem = (smartphone) => {
        const newMockSystem = Object.assign([], this.state.mockSystem);
        newMockSystem.push(smartphone);
        this.updateDeviceList(newMockSystem);
        
        this.setState({mockSystem: newMockSystem});
    }

    updateDeviceList = (newMockSystem) => {
        fetch(`/get_compatible_smartphones_with_system`, {
            method:'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"smartphones": newMockSystem})
        }).then(response =>
            response.json().then(data => {
                var newDatas = newMockSystem.length > 0 ? data.smartphones : this.state.smartphones;
                this.setState({mockSmartphone: newDatas});
            })
        );
    }

    deleteSmartphoneFromDeviceList = (index) => {
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
                        delEvent={this.deleteSmartphoneFromDeviceList}
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
