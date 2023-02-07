import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// set up ChakraProvider in root of application
import {ChakraProvider} from "@chakra-ui/react"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
