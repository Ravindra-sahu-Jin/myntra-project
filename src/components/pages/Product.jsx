import React from 'react'
import SideBarFilter from '../productcomponents/SideBarFilter'
import ProductLayout from '../productcomponents/ProductLayout'

export default function Product() {
    return (
        <>
            <section class="px-2 pb-3    border-b-1 border-bg-gray-300">
                <div class=" w-full p-5 ">
                    <div class="flex">
                        <p class="text-[14px]">Home / Clothing / </p>
                        <span class="font-bold text-[14px]">Men T-Shirts</span>
                    </div>
                    <p class="text-[16px] py-3"><span class="font-bold text-[14px]">Men T-Shirts</span>-157339 items</p>
                </div>
                <div class=" grid grid-cols-[20%_30%_auto] px-5 ">
                    <div class=""><span>FILTERS</span></div>
                    <div class="flex lg:gap-x-6  md:gap-x-2 gap-2 ">
                        
                    </div>
                    <div class=" flex justify-end ">
                        <select name="cars" id="cars" class="lg:w-[40%] md:py-1 md:w-[30%] rounded-none px-2 border border-gray-500" fdprocessedid="ypnfe">
                            <option value="volvo">Name : A to Z</option>
                            <option value="saab">Name : Z to A</option>
                            <option value="mercedes">Price : Low to High</option>
                            <option value="mercedes">Price : High to Low</option>
                            <option value="mercedes">Discounted Price : Low to High</option>
                            <option value="mercedes">Discounted Price : High to Low</option>
                            <option value="mercedes">Rating : Low to High</option>
                            <option value="mercedes">Rating : High to Low</option>
                        </select>
                    </div>
                </div>
            </section>
            <div className='grid grid-cols-[20%_auto] gap-8'>
                <SideBarFilter />
                <ProductLayout />
            </div>
        </>

    )
}
