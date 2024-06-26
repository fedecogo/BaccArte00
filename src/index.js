import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import './index.css'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style/index.css'
import 'react-multi-carousel/lib/styles.css';


import store from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
