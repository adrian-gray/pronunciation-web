import React from 'react'
import ReactDOM from 'react-dom'

import {
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core'
import { red } from '@material-ui/core/colors'

import App from './App'

const theme = createMuiTheme({
  palette: {
    primary: red
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('app')
)
