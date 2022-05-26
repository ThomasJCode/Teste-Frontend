import React from 'react'
import { ThemeProvider } from 'styled-components'
import { themes } from './styles/themes'
import FontStyles from './styles/fonts/styles'
import GlobalStyle from './styles/globalStyles'
import { Home } from './home'

function App() {
  return (
    <ThemeProvider theme={themes} >
      <FontStyles>
        <GlobalStyle />
        <Home />
      </FontStyles>
    </ThemeProvider>
  );
}

export default App;
