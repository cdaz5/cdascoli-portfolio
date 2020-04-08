import { useState, useCallback } from 'react';

import { lightTheme, darkTheme } from 'styles';

const useTheme = () => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) =>
      prevTheme.type === 'dark' ? lightTheme : darkTheme,
    );
  }, []);

  return { theme, toggleTheme };
};

export default useTheme;
