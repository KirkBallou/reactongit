import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount () {
    const styleLink2 = document.createElement("link");
    styleLink2.rel = "stylesheet";
    styleLink2.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(styleLink2);
    const jsscript = document.createElement("script");
    jsscript.type = "text/javascript";
    jsscript.async = true;
    jsscript.src = "https://assets.calendly.com/assets/external/widget.js";
    document.body.appendChild(jsscript);


  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
