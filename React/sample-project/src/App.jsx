import React from 'react'
import Navbar  from './components/Navbar'


const App = () => {
    const data={
        appname:"Heloo"//Object passing
    }
    const logo="My Logo"
    const test="Hello World"
  return (
    <>
    <p className="text-violet-400">{test}</p>
    <Navbar appdata={data} />
    <p className="text-red-500">{logo}</p>
    </>
    
  )
}

export default App
