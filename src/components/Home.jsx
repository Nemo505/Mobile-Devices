import React from 'react'
import Case from '../assets/case.jpg'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Home = () => {
  return (
    <div className='md:flex gap-8 mx-auto py-auto bg-orange-300 items-center justify-center h-[85vh]'>
      <div className='py-5 text-center'>
        <p className='text-4xl  font-bold font-serif pb-5 '>Get The Base Product 
            <span className='font text-orange-600'> At your Home</span></p> 
        <button className='hover:animate-pulse p-3 rounded-md font-serif bg-white '>
          Shop Now
          <span ><KeyboardDoubleArrowRightIcon className='text-orange-600' /></span>
        </button>
      </div>
      <div>
        <img src={Case} alt="" className='rounded-md md:h-[50vh] h-[40vh] mx-auto' />
      </div>
    </div>
  )
}

export default Home