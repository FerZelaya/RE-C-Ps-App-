import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createMuiTheme, ThemeProvider} from '@material-ui/core'

const myTheme = createMuiTheme({
  typography:{
    fontFamily: [
      'Lobster'
    ]
  },
  palette:{
    primary:{
      main:'#8BC34A'
    },
    secondary:{
      main:'#689F38'
    }
  }
})

ReactDOM.render(
  <ThemeProvider theme={myTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
