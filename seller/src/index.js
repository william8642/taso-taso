import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'



//使用中介軟體時，建立store的方法，需要額外建立一個composeEnhancers
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// const store = 
//  composeEnhancers

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
