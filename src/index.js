import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HelloMessage,Person,HelloMessageSimple, TypeName, NamePassword,NamePassword2} from './Home'
import Header from './Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <HelloMessage />
    <Person name ='jack'age='19' gender='male' />
    <HelloMessageSimple />
    <TypeName />
    <NamePassword />
    <NamePassword2/>
    <Header car ='BMW' girls = '200' />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
