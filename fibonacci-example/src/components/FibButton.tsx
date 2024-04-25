import React, { useState } from 'react';
import {calculateFibonacciSqn } from '../utilities/calculateFibonacciSqn';

export function FibButton() {
  const [currentNumber, setCurrentNumber] = useState<number>(0)
  const handleClick = (e: React.MouseEvent) => {
    const sequence = calculateFibonacciSqn(currentNumber);
    setCurrentNumber(sequence);
  }

  return (
    <>
      <button data-testid="fib-button" onClick={(e) => handleClick(e)}>increment sequence</button>
      {"\tCurrent Value:\t"} <span data-testid="fib-current">{currentNumber}</span>
    </>
  );
}
