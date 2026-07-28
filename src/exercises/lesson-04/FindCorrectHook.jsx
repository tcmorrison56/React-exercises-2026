// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useRef } from 'react';

export default function FindCorrectHook() {
  // let clickCount = 0; // ← incorrect implementation
  let clickCount = useRef(0);
  const btnRef = useRef(null);

  function handleClick() {
    clickCount.current += 1;
    if (btnRef.current) {
      btnRef.current.textContent = `${clickCount.current} clicks`;
    }
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button ref={btnRef} onClick={handleClick} value={clickCount}>
        0 clicks
      </button>
    </div>
  );
}

// {clickCount}
