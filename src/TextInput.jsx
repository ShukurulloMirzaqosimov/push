import React, { useState, useEffect } from 'react';

const TextInput = ({ text }) => {
  const [input, setInput] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  useEffect(() => {
    if (input === text) {
      setEndTime(Date.now());
    } else {
      setEndTime(null);
    }
  }, [input, text]);

  useEffect(() => {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] === text[i]) {
        count++;
      }
    }
    setCorrectCount(count);
  }, [input, text]);

  const handleInputChange = (e) => {
    if (!startTime) {
      setStartTime(Date.now());
    }
    setInput(e.target.value);
  };

  const getElapsedTime = () => {
    if (startTime && endTime) {
      return ((endTime - startTime) / 1000).toFixed(2);
    }
  
    return null;
  };

  return (
    <div>
      <p className="text-xl">{text}</p>
      <textarea
        className="w-full h-32 p-2 border border-gray-300 rounded mt-2"
        value={input}
        onChange={handleInputChange}
        placeholder="Yozishni boshlang..."
      />
      <p className="mt-2">To'g'ri harflar: {correctCount}</p>
      {endTime && (
        <p className="mt-2">Yozish vaqti: {getElapsedTime()} soniya</p>
      )}
    </div>
  );
};

export default TextInput;
