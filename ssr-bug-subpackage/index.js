// Not using JSX or ESModules here
const React = require('react')

const styles = require('./styles.css')

Object.defineProperty(exports, "__esModule", {
  value: true
});


const TestComponent = () => React.createElement(
  'div',
  { className: styles.testClass },
  'This should be red',
)


exports.default = TestComponent
