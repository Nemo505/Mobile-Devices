import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-orange-500 py-4'>
        <div className='flex mx-auto items-center justify-between w-5/6'>
            <NavLink to={"/"}><h3 className='font-semibold font-serif'>Maple</h3></NavLink>
            <div className='flex justify-between gap-16'>
                <NavLink to={"/products"} className='hover:text-white hover:cursor-pointer'>Products</NavLink>
                <NavLink to={"/cart"} className='hover:text-white hover:cursor-pointer'>Cart</NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar