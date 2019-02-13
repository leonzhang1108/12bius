import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Firework from './Firework';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Firework />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
