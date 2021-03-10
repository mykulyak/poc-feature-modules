import React from 'react';
import ReactDOM from 'react-dom';
import context from '@pocfm/core';
import registeModule1 from '@pocfm/feature1/build';
import registeModule2 from '@pocfm/feature2/build';
import registeModule3 from '@pocfm/feature3/build';

import App from './App';
import reportWebVitals from './reportWebVitals';

registeModule1(context);
registeModule2(context);
registeModule3(context);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
