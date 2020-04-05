import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, lightTheme, SlashContainer } from 'styles';

const App = () => {
  // TODO: add light/dark theme state change here;

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>
        <SlashContainer>hi</SlashContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
