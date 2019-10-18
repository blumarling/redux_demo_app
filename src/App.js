import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import { compose } from 'recompose'
import { withRedux } from './hoc'

import './App.css'

import { Home, HomeHooks, FormTest } from './views'
class App extends Component {
  render() {
    return (
      <Router basename={''}>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/hook-test" component={HomeHooks} exact/>
          <Route path="/form-test" component={FormTest} exact/>
        </Switch>
      </Router>
    )
  }
}

// compose è un'utility per wrappare il componente dentro una catena di high order component
// le props passano da hoc a hoc partendo dall'ultimo 
export default compose(
  withRedux,
)(App)
