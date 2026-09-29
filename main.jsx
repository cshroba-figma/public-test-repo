import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [count, setCount] = useState(0);
  const curve = 125 + 55 * Math.tanh(count / 5);
  return <main>
    <h1>Smile counter</h1>
    <svg viewBox="0 0 200 200" role="img" aria-label={count > 0 ? 'Smiling face' : count < 0 ? 'Frowning face' : 'Neutral face'}>
      <circle cx="100" cy="100" r="95" fill="#ffd34e" />
      <g fill="#292524"><circle cx="68" cy="78" r="8" /><circle cx="132" cy="78" r="8" /></g>
      <path d={`M 55 125 Q 100 ${curve} 145 125`} fill="none" stroke="#292524" strokeWidth="7" strokeLinecap="round" />
    </svg>
    <button aria-label="Decrease count" onClick={() => setCount(c => c - 1)}>−</button>
    <output aria-live="polite">{count}</output>
    <button aria-label="Increase count" onClick={() => setCount(c => c + 1)}>+</button>
  </main>;
}

createRoot(document.getElementById('root')).render(<App />);
