import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Parent from './Parent'
import Child from './Child'
import ContextDemo from './Context'
import ReactDemo from './react_dom'
import Counter from './Counter'
import RouterDemo from './Router_demo'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Parent />
    <Child />
    <ContextDemo />
    <ReactDemo />
    <Counter />
    <RouterDemo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

