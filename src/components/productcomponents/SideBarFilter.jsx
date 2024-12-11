import React from 'react'

export default function SideBarFilter() {
  return (
    <div classNameName='border-2 p-3'>
        <div className="mt-4 border-t border-gray-200 p-3 border-2 mb-4 h-[300px] overflow-y-scroll">
           <h3 className='font-medium text-gray-900'>Categories</h3>
            <ul role="list" className="px-2 py-3 font-medium text-gray-900">
              <li>
                <a href="#" className="block px-2 py-3"> <input type="checkbox" /> Totes</a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3">  <input type="checkbox" /> Backpacks</a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3">  <input type="checkbox" /> Travel Bags</a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3">  <input type="checkbox" /> Hip Bags</a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3">  <input type="checkbox" /> Laptop Sleeves</a>
              </li>
            </ul>
        </div>
        <div className="mt-4 border-t border-gray-200 p-3 border-2 mb-4 h-[300px] overflow-y-scroll">
           <h3 className='font-medium text-gray-900'>Brands</h3>
            <ul role="list" className="px-2 py-3 font-medium text-gray-900">
              <li>
                <a href="#" className="block px-2 py-3"> <input type="checkbox" /> Totes</a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3">  <input type="checkbox" /> Backpacks</a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3">  <input type="checkbox" /> Travel Bags</a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3">  <input type="checkbox" /> Hip Bags</a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3">  <input type="checkbox" /> Laptop Sleeves</a>
              </li>
            </ul>
        </div>
    </div>
  )
}
