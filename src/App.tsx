import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { CycleContextProvider } from './context/CycleContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CycleContextProvider>
        <Router />
      </CycleContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
