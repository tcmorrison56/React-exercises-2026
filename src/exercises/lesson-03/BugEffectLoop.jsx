//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// The original code was missing the dependency array. The empty dependency array means useEffect will only run when the component mounts. I am assuming using setCount immediately to change the count is just to test the knowledge of useEffect, but wouldn't it be better to just set the state of the count to 1 to begin with? This would get rid of the eslint error about cascading renders.
