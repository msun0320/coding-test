import React from 'react';
import ReactDOM from 'react-dom';
import DateFrequencyChart from './DateFrequencyChart';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DateFrequencyChart />, div);
});
