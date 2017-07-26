import React, {Component} from 'react';
import ReactQrReader from 'react-qr-reader';

class QrReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: 'Nothing read at the moment',
      error: null,
      link: false
    }

    this.handleError = this.handleError.bind(this);
    this.handleScan = this.handleScan.bind(this);
  }

  handleError(error) {
    this.setState({
      error: error
    });
  }

  handleScan(data) {
    if (data) {
      var link = false;
      if (data.indexOf("https") === 0 || data.indexOf("http") === 0) {
        link = true;
      }
      this.setState({
        result: data,
        link: link
      });
    }
  }

  render() {
    const qrStyle = {
      width: "60%",
      margin: 'auto'
    };
    const paragraphStyle = {
      fontSize:  'large',
      padding: '20px',
      fontWeight: 'bold'
    };
    return (
      <div>
        <ReactQrReader
          delay={this.state.delay}
          style={qrStyle}
          facingMode="rear"
          onError={this.handleError}
          onScan={this.handleScan}
        />
        <div style={paragraphStyle}>
        {this.state.link ?
          <a href={this.state.result}>{this.state.result}</a>
        :<p>{this.state.result}</p>}
        {this.state.error ?
          <p>Error Occurred: {this.state.error}</p>
         : null}
        </div>
      </div>
    );
  }
}

export default QrReader;
