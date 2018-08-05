import React from 'react'
import ReactDOM from 'react-dom'

import {
  MuiThemeProvider
} from '@material-ui/core'

import Theme from './Theme'
import App from './App'

ReactDOM.render(
  <MuiThemeProvider theme={Theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('app')
)
