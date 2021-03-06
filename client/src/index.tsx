import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, StaticRouter } from 'react-router-dom'; // we will use static router later
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// this will be used later
// const context = {};
// const markup = ReactDOMServer.renderToString(
//   <StaticRouter location={req.url} context={context}>
//       {/* If we find a context.url, then we know the app redirected. 
//       This allows us to send a proper redirect from the server. */}
//     <App />
//   </StaticRouter>
// );