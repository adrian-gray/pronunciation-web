import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SoundRouter from './SoundRouter'
import FourOhFour from './../pages/404'
import Landing from './../pages/Landing'
import Login from './../pages/Login'
import Sounds from './../pages/Sounds'
import Profile from './../pages/Profile'

class Router extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route
          exact path='/login'
          render={(props) => <Login user={this.props.user} {...props} />}
        />
        <Route
          exact path='/profile'
          render={(props) => <Profile user={this.props.user} {...props} />}
        />
        <Route exact path='/sounds' component={Sounds} />
        <Route path='/sound' component={SoundRouter} />
        <Route default component={FourOhFour} />
      </Switch>
    )
  }
}

export default Router
