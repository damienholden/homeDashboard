import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
// import Contact from './components/Contact/Contact'
import Error from './components/Error/Error'

import Header from './components/Header/Header'

function App() {
  return (
  <section>
    <Header/>
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects}/>
        {/* <Route path='/contact' component={Contact}/> */}
        <Route component={Error} />
      </Switch>
    </main>
  </section>
  )
}


export default App;