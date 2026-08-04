// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    // Add cleanup function to remove interval on component unmount
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug

// With strict mode enabled, the component is mounted, then unmounted, then mounted again. To fix the issue we needed to add a cleanup function the remove the interval when the component is unmounted. Without this when the component is mounted a second time we have two intervals running simultaneously which is why it was incrementing by 2.
