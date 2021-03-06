import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import injectTapEventPlugin from 'react-tap-event-plugin';

import TemplateName from './TemplateName'

import './App.css'

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
      <div className="App">
        <AppBar showMenuIconButton={false} title='Connection logs' />
		<TemplateName />
      </div>
    </MuiThemeProvider>
    )
  }
}

export default App
