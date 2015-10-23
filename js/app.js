var React = require('react');

// Needed for React 0.11 and older
/*
if (typeof window !== 'undefined') {
    window.React = React;
}
*/

var App = require('./components/main.js');

React.render(<App />, document.querySelector('.container'));
