import { useState, useCallback } from 'react';

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState((x) => !x), []);

  return [state, toggle]
}

export { useToggle };
