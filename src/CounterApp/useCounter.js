const { useState } = require('react');

/**
 * @export
 * @param {number} [initialValue=0]
 * @return {{ count: number, increment: () => void, increase: () => void }}
 */
export default function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const increase = (amount) => setCount(count + amount);

  return { count, increment, increase };
}