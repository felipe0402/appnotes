import React from 'react'
import ReactDOM from 'react-dom/client'
import { Details } from './pages/Details/index.jsx'
import theme from './styles/theme.js'
import {ThemeProvider} from 'styled-components'
import GlobalStyles from './styles/global.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode  >
    <ThemeProvider theme={theme}>
    <Details/>
    <GlobalStyles/>
    </ThemeProvider>
  </React.StrictMode>,
)
 
