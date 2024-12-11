import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
export let ProductConext=createContext()
export default function MainContext({children}) {
  
  let [product,setProduct]=useState([])  
  let [category,setCategory]=useState([]) 
  let [brand,setBrand]=useState([]) 

  let [categoryFilterState,setCategoryFilterState]=useState('')

  let getProduct=()=>{
    axios.get(`https://wscubetech.co/ecommerce-api/products.php`,{
        params:{
            page: 1,
            limit: 12,
            categories: categoryFilterState,
            brands: '',
            price_from:'', 
            price_to: '',
            discount_from:'', 
            discount_to: '',
            rating: null,
            sorting: null,
        }
    })
    .then((res)=>res.data)
    .then((finalRes)=>{
        setProduct(finalRes.data)
    })
  }  
  
  let getCategory=()=>{
    axios.get(`https://wscubetech.co/ecommerce-api/categories.php`)
    .then((res)=>res.data)
    .then((finalres)=>{
        setCategory(finalres.data)
    })
  }

  let getBrand=()=>{
    axios.get(`https://wscubetech.co/ecommerce-api/brands.php`)
    .then((res)=>res.data)
    .then((finalres)=>{
        setBrand(finalres.data)
    })
  }

  useEffect(()=>{
    getCategory();
    getBrand()
  },[])

  useEffect(()=>{
    getProduct();
  },[categoryFilterState])

  let obj={product,category,brand,categoryFilterState,setCategoryFilterState}
  return (
    <ProductConext.Provider value={obj}>
        {children}
    </ProductConext.Provider>
  )
}
