import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Counter from './counter/Container';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Provider} from 'react-redux';
import store from './Store';

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
