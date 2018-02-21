// Not using JSX or ESModules here
const React = require('react')

require('./styles.css')

Object.defineProperty(exports, "__esModule", {
  value: true
});


const TestComponent = () => React.createElement(
  'div',
  { className: 'test-class-bug' },
  'This should be red',
)


exports.default = TestComponent
