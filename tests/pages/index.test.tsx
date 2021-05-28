
import React from 'react';
import Index from '../../pages/index';
import ReactDOM from 'react-dom';

test('IndexPage', () => {
  const root: HTMLDivElement = document.createElement('div');
  ReactDOM.render(<Index/>, root );
  expect(root.getElementsByClassName('indexFlex').length).toBeGreaterThan(0);
});
