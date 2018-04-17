import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/typography.css';
import './styles/editor.css';
import './styles/editor-custom.css';
import './styles/cursor.css';
import './styles/table.css';
import './configure-code-libraries';
import './load-materialish-styles';
import App from './app';

// This export is used for static rendering
export default App;

if (typeof document !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById('root'));
}
