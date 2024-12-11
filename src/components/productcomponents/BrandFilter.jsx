import React, { useContext } from 'react'
import { ProductConext } from '../../context/MainContext'

export default function BrandFilter() {
    let {brand}=useContext(ProductConext)  
    return (
      <div>
         <div className="mt-4 border-t border-gray-200 p-3 border-2 mb-4 h-[300px] overflow-y-scroll">
             <h3 className='font-medium text-gray-900'>Categories</h3>
              <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                {brand.length>=1 ?
                      brand.map((brandItems,index)=>{
                          return(
                              <li key={index} className="block px-2 py-3">
                                <input type="checkbox" value={brandItems.slug} className='mr-3' />  
                                  {brandItems.name}
                                 
                              </li>
                          )
                      })
                      :
                      <li>No brand Found</li>
              
                  }  
                
               
              </ul>
          </div>
      </div>
    )
}
