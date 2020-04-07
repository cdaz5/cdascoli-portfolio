import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, lightTheme } from 'styles';
import Introduction from 'components/introduction';
import BlogPosts from 'components/blog-post';
import Project from 'components/project';

const App = () => {
  // TODO: add light/dark theme state change here;

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>
        <Introduction />
        <BlogPosts />
        <Project />
      </ThemeProvider>
    </>
  );
};

export default App;
