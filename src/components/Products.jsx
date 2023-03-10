import React, { useRef, useState } from 'react'
import products from '../dummy/products.json'
import { Link, useNavigate } from 'react-router-dom'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const Products = () => {
    const randomColor = () => {
        const arrayColor = ["#f87171", "#ea580c", "#fbbf24"]
        return arrayColor[0];
    }
    // const productIdRef = useRef();
    const navigate = useNavigate();
    const handleClick= (id, e) => {
        navigate("/detail", {state:{productId:id}})
        console.log(id);
    }
  return (
    <div className='container mx-auto'>
        <div className='flex items-center'>
            <Link to={"/"} className='hover:text-orange-600'>
                <KeyboardDoubleArrowLeftIcon className='flex-none mr-2'/>
                <span>Back</span>
            </Link>
            <p className='flex-auto text-center mt-5 text-4xl'>Features Products</p>
        </div>
        <hr  className='mx-auto w-1/3 bg-black'/>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-10 m-10 relative'>
            {
                products.products.map( (product)=> {
                return(
                    <div key={product.id} className='absoulute border border-slate-300 shadow-xl text-center hover:saturate-150 hover:shadow-orange-900/50'>
                        <div className='max-w-[400px] max-h-[300px] md:max-w-[300px] p-10'>
                            <img src={product.images[0]} alt="" className='object-contain h-48 w-96'/>
                        </div>
                        <div className="font-serif font-medium my-4 h-7">{product.brand}</div>
                
                        <div className='font-extralight font-sans text-gray-600 from-neutral-700 my-2 h-15'>{product.description.substring(0, 20)}</div>
                        <div className={`font-bold my-3 ${randomColor}`}>${product.price}</div>

                        <div  id={product.id} className="bottom-0 py-3 bg-orange-500 font-serif font-semibold text-white  hover:animate-pulse cursor-pointer"
                            onClick={(e) => handleClick(product.id,e)}>
                                More Detail
                        </div>
                    </div>
                ) 
                })
            }
        </div>
    </div>
  )
}

export default Products