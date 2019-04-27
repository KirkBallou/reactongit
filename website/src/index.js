import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

import { Container, Header, List } from "semantic-ui-react";

import Example from "./example";

import ImgGrid from "./grid";

import axios from 'axios'

const App = ({ children }) => (


  <Container>
    {children}
  </Container>
);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
document.body.style = 'background: #E91E63';


 
ReactDOM.render(
  <App>
 <i class="fas fa-calendar-check"></i>
    <ImgGrid />
  </App>,
  document.getElementById("root")
);


//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
