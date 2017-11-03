import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing'

import NavBar from './components/NavBar'

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
