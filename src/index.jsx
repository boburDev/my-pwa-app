import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/App'
import { BrowserRouter } from "react-router-dom"
import swDev from './swDev'

// import './index.css'
// import * as serviceWorkerRegistration from './appUtils/serviceWorkerRegistration'
// import reportWebVitals from './appUtils/reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
swDev()


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()