import React from 'react'
import '/styles/globals.css'

const App = ({Component, pageProps}) => {
  return (
    <Component {...pageProps}></Component>
  )
}

export default App