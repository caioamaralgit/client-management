import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import CustomerContext from './contexts/customer';

ReactDOM.render(
  <CustomerContext>
    <App />
  </CustomerContext>,
  document.getElementById('root') as HTMLElement
);
