import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Error from './components/Error/Error'

import Header from './components/Header/Header'

function App() {
  return (
  <div className="APP">
    <main>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route component={Error} />
      </Switch>
    </main>
  </div>
  )
}


export default App;