
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import SellerBack from './components/seller_back/SellerBack'
function App(props) {
  console.log(props)
  return (
    <React.Fragment>
      <Router path = '/SellerBack'>
<SellerBack/>
      </Router>
    </React.Fragment>
  )
}

export default App
