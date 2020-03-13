import { useState, useEffect } from 'react';

function usePersistentState(key, initialValue) {
  const storage = localStorage.getItem(key);
  const value = storage ? JSON.parse(storage) : initialValue;
  const [state, setState] = useState(value);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistentState;
