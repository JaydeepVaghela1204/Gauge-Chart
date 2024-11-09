import React from 'react';

const RangeInput = ({ value, onChange }) => (
  <input
    type="range"
    min="0"
    max="100"
    value={value}
    onChange={(e) => onChange(Number(e.target.value))}
  />
);

export default RangeInput;
