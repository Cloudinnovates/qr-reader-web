import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QrReader from './components/QrReader';

class App extends Component {
  render() {
    const qrReaderStyle = {
      marginTop: "20px"
    };
    /*const introSentence = "This is a web qr code reader that accesses the camera." +
                          " It eliminates the need for a separate qr code scanning app." +
                          " Just use this!!!";*/
    var instructions = " QR Code result will display at bottom. Please point the QR code towards " +
                       "the middle of the camera and hold until the result appears.";
    const title = "Web QR Code Reader";
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{title}</h2>
          {/*<p className="App-intro">{introSentence}</p>*/}
        </div>
        {/*<h2>Instructions:</h2>*/}
        <div className="App-instr">
          <p className="instr-title">Instructions:</p>
          <p className="instr-text">{instructions}</p>
        </div>
        <div style={qrReaderStyle}>
          <QrReader/>
        </div>
      </div>
    );
  }
}

export default App;
