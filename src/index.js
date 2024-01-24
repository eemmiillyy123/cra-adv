import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assests/scss/all.scss"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //新增幅度不對，因為React.StrictMode的關係會導致reducer重複被執行 要避免可直接將其移除
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
