import React from 'react'
import  ReactDOM  from 'react-dom/client'
import App from './App'

let root=ReactDOM.createRoot(document.querySelector('#root'),()=>{
    console.log('application started')
})
root.render(
    <App/>
)