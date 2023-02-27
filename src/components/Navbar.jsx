import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-orange-500 py-4'>
        <div className='flex mx-auto items-center justify-between w-5/6'>
            <h3 className='font-semibold font-serif'>Maple</h3>
            <div className='flex justify-between gap-16'>
                <p className='hover:text-white hover:cursor-pointer'>Products</p>
                <p className='hover:text-white hover:cursor-pointer'>Cart</p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar