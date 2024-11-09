import React from 'react';

const RandomUpdateButton = ({ onClick }) => (
  <button onClick={onClick} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#4a90e2', color: '#fff', border: 'none', borderRadius: '5px' }}>
    Random Update
  </button>
);

export default RandomUpdateButton;
