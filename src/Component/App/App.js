import React, { Component } from 'react';
import {Route} from 'react-router-dom'

// Component import
import HeaderMenu from '../HeaderMenu'
import Home from '../Home'
import Skills from '../Skills'
import Contact from '../Contact'
import About from '../About'


class App extends Component {

render() {

    return (
      <div className="App">
        <div className='appBg'>

          <HeaderMenu />
          <Home />

          <Route exact path="/about" render={() => (<About />)}/>
          <Route exact path="/skills" render={() => (<Skills />)}/>
          <Route exact path="/contact" render={() => (<Contact />)}/>
        </div>
      </div>
    );
  }
}

export default App;
