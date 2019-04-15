import React from 'react';
import ReactDOM from 'react-dom';

import './app.scss'

const title = 'My Minimal React Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();