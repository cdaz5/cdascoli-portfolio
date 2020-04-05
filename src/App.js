import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, lightTheme } from 'styles';
import Introduction from 'components/introduction';

const App = () => {
  // TODO: add light/dark theme state change here;

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>
        <Introduction />
      </ThemeProvider>
    </>
  );
};

export default App;
