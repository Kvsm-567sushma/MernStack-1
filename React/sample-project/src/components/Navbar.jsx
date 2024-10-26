import React, { useState } from 'react'

const Navbar = ({appdata,logo}) => {

    const [numberstate,setNumberstate]=useState(10)
    const [stringstate,setStringstate]=useState("C")
    const [arraystate,setArraystate]=useState([1,2,3,6])
    console.log(numberstate)
    console.log(stringstate)
    console.log(arraystate)
  return (
    <>
      {appdata.appname} {logo}
    </>
  )
}

export default Navbar
