import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import injectTapEventPlugin from 'react-tap-event-plugin';

import Hello from './Hello'
import Bottom from './Bottom'

import './App.css'

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
      <div className="App">
        <AppBar title='Connection logs' />
        <Hello />
        <Bottom />
      </div>
    </MuiThemeProvider>
    )
  }
}

export default App
