import React, { useState } from 'react';

const SumCalculator = () => {
  const [input, setInput] = useState('');
  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;

    const num = Number(value);
     setInput(value);
      setSum(prev => prev + num);
     
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type='number'
        value={input}
        onChange={handleChange}
        placeholder='Enter number'
      />
      <p>Sum: {sum}</p>
    </div>
  );
};

export default SumCalculator;
