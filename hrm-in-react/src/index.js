import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'React with Webpack and Babe';

ReactDOM.render(<App title={title} />, document.getElementById('app'));

var copy = App;

if (module.hot) {
  module.hot.accept('./App', () => {
    console.log('~~~~', copy === App);
    ReactDOM.render(<App title={title} />, document.getElementById('app'));
  });
}
