import React, { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, lightTheme, darkTheme } from 'styles';
import Introduction from 'components/introduction';
import BlogPosts from 'components/blog-post';
import Project from 'components/project';

const useTheme = () => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) =>
      prevTheme.type === 'dark' ? lightTheme : darkTheme,
    );
  }, []);

  return { theme, toggleTheme };
};

const App = () => {
  const { theme, toggleTheme } = useTheme();
  console.log({ theme });
  // TODO: add light/dark theme state change here;

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <button onClick={toggleTheme}>click</button>
        <Introduction />
        <BlogPosts />
        <Project />
      </ThemeProvider>
    </>
  );
};

export default App;
