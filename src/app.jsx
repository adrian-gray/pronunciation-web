import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'

import Landing from './js/Landing'

import NavBar from './js/components/NavBar'

const App = () => {
  return (
    <HashRouter>
      <div>
        <NavBar />
        <Route exact path='/' component={Landing} />
      </div>
    </HashRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
