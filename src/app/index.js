import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'styles';
import Introduction from 'components/introduction';
import BlogPosts from 'components/blog-post';
import Project from 'components/project';
import Switch from 'components/switch';
import useTheme from 'hooks/use-theme';

import { SwitchContainer } from './styles';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <SwitchContainer>
          <Switch onChange={toggleTheme} />
        </SwitchContainer>
        <Introduction />
        <BlogPosts />
        <Project />
      </ThemeProvider>
    </>
  );
};

export default App;
