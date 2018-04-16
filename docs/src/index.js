import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// This export is used for static rendering
export default App;

if (typeof document !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById('root'));
}
