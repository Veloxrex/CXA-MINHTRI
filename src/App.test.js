import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import {CalculatorComponent } from "./calculator";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders calculator component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalculatorComponent />, div);
});

// test('Link changes the class when hovered', () => {
//   const component = renderer.create(
//       <CalculatorComponent/>,
//   );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // tree.props.onMouseEnter();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
  //
  // // manually trigger the callback
  // tree.props.onMouseLeave();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
// });
