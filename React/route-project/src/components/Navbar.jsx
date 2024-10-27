import React from 'react'

const Navbar = () => {
   
  return (
    <>
       <div className='w-screen h-10  shadow-purple-400 shadow-md flex flex-row justify-center items-center ' > 
          <div className='w-[40%] flex justify-start items-center font-bold-2x1 text-purple-600'>
            Max Store
          </div>
          <div className='w-[40%] flex justify-start items-center'>
            <ul className='w-full flex flex-row justify-end items-center gap-8 font-semibold'>
                <li>Home</li>
                <li>Products</li>
                <li>Contact</li>
            </ul>

          </div>
        </div>  
    </>
  )
}

export default Navbar
