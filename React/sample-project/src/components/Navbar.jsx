import React, { useEffect, useState } from 'react'

const Navbar = ({ appdata, logo }) => {

  const [numberstate, setNumberstate] = useState(10)
  const [stringstate, setStringstate] = useState("C")
  const [arraystate, setArraystate] = useState([1, 2, 3, 6])
  //console.log(numberstate)
  //console.log(stringstate)
  //console.log(arraystate)



  const [count, setCount] = useState(0);
  useEffect(() => {
    //alert('effect rendered')
    console.log("Count is " + count)

  }, [count])
  return (
    <>
      {/*appdata.appname {logo}*/}
      <button className='w-[6 rem] h-[4 rem] bg-violet-500 text-white' onClick={()=>{setCount(count+1)}}>
      
        Count{count}
      </button>
      
    </>
  )
}

export default Navbar
