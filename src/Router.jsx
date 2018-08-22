import React from 'react'
import { Route, Switch } from 'react-router-dom'

import FourOhFour from './pages/404'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Sounds from './pages/Sounds'
import Sound from './pages/Sound'
import Profile from './pages/Profile'

class Router extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
        <Route
          exact path='/login'
          render={props => <Login user={this.props.user} {...props} />}
        />
        <Route
          exact path='/profile'
          render={props => <Profile user={this.props.user} {...props} />}
        />
        <Route exact path='/sounds' component={Sounds} />
        <Route
          path='/sound/:phoneme/:activity?'
          render={props => <Sound subscriptionLevel={this.props.subscriptionLevel} {...props} />}
        />
        <Route path='/sound/:phoneme' compoment={Sound} />
        <Route default component={FourOhFour} />
      </Switch>
    )
  }
}

export default Router
