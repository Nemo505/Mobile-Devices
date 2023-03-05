import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import products from '../dummy/products.json'

const Detail = () => {
    const [count, setCount] = useState(0);
    const minus = () => {
      setCount( count => count > 0 ? count-1 : 0)  
    }

    const location = useLocation();
    console.log(location.state.productId);


  return (
    <div>
      {
        products.products.map((product)=> {
          return( product.id == location.state.productId ?
            <div key={product.id} >
              
              <div className='bg-gray-500 flex ' style={{height:'84vh'}}>
                      <div className='bg-white m-auto p-10 text-center shadow-xl'>
              
                        <div className='flex items-center mr-0 gap-2 mx-auto'>
                            {/* {location.state.productId} */}
                            <div className='flex-1 mr-0'>
                              <img src={product.images[0]} alt="" className='object-contain h-30 w-30 md:h-58 md:w-96'/>
                            </div>
                            <div className='flex-1 text-start'>
                                <h3 className='font-semibold font-serif'>{product.title}</h3>
                                <hr className='my-5 w-10 h-1 bg-red-500' />
                                <p className='font-mono leading-loose'>{product.description}</p>
                                <h3 className='my-3 tracking-wideest font-sans font-semibold text-red-600'>${product.price}</h3>
              
                                <label htmlFor="cars">Stock</label>
                                <div className='md:flex gap-3'>
                                  <div className='flex gap-3 items-center'>
                                    <button onClick={minus}>
                                      -
                                    </button>
                                    <div className='px-5 bg-slate-200 border border-red-500 rounded-md'>
                                        {count}
                                    </div>
                                    <button onClick={() => setCount(count => count < product.stock ? count+1: count)}>
                                      +
                                    </button>
                                  </div>
                                  <button className='border px-7 py-1 my-2 rounded-md text-white bg-red-500'> Add to Cart</button>
                                </div>
              
                            </div>
                            
                        </div>
                      </div>
              </div>
          </div> : null
            
          )
        })
      }
    </div>
    
  )
}

export default Detail