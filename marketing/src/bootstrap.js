import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// exported function to render this app
export const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// if dev mode, render immediatly to the reserved location in index.html
if (process.env.NODE_ENV === 'development') {
  const devRootEl = document.querySelector('#app-marketing-dev-root');
  if (devRootEl) {
    mount(devRootEl);
  }
}
