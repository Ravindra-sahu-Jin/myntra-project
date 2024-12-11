import React, { useContext } from 'react'
import { ProductConext } from '../../context/MainContext'

export default function ProductLayout() {
  let {product}=useContext(ProductConext)
  return (
    <div class=" grid grid-cols-4 gap-3">
      {product.length>=1
          ?
          product.map((productItems,index)=><ProductItems key={index} productData={productItems}/>)
        :
          "No Data Found"
        }
      
     
    </div>
  )
}

function ProductItems({productData}){

  let {name,image,category_name,price}=productData

  return(
    <div class="border-2 border-gray-300 border-solid ">
      <div class="">
        <img src={image} alt="" class=""/>
        </div>
      <div class="p-2">
        <p class="font-semibold f">
          {name}
        </p>
        <div class="flex justify-between">
          <p> price: {price}</p>
          <span> Rating:3</span>
        </div>
      </div>
      <div class="flex justify-center pb-2"><button class="  border-2 border-[gray] rounded-md p-2 flex hover:bg-slate-200" fdprocessedid="nzllhd">Add to cart</button></div>
  </div>
  )
}