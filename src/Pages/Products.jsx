import React from 'react'
import { useState } from "react"
import { Link,
   useSearchParams,
   useLoaderData,
   defer,
   Await,
   } from 'react-router-dom'
import { getProducts } from '../api.js'


export function loader() {
  return defer({ products: getProducts() })
}


function Products(){
   
   const [q, setQ] = useState("")
    const [searchParam] = useState(["name"]);
    const [searchParams, setSearchParams] = useSearchParams()
    const [error, setError] = useState(null)
    const dataPromise = useLoaderData()
     
    
    const [productsList, setProductsList] = useState()
    
   
    
    if (error) {
      return <h1>There was an error: {error.message}</h1>
    }
    
    function renderElements(products) {
      const typeFilter = searchParams.get("type")
  const displayedProducts = typeFilter
? products.filter(product => product.type === typeFilter)
: products

  function search(products){
    return products.filter((products) => {
      return searchParam.some((newproducts) => {
       return (
         products[newproducts]
         .toString()
         .toLowerCase()
         .indexOf(q.toLowerCase()) > -1
         )
       } )
     })
   }

  
   function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
        if (value === null) {
            prevParams.delete(key)
        } else {
            prevParams.set(key, value)
        }
        return prevParams
    })
  }

   function sortProductsByPrice (e) { 
     e.stopPropagation();
     
     if (e.target.value === 'FilterByprice') {
     setProductsList([...products.sort((a, b) => { return a.id - b.id })])
     }
     
     if (e.target.value === 'LowToHigh') {
     setProductsList([...products.sort((a, b) => { return a.price - b.price })]);
     }
     
     if (e.target.value === 'HighToLow') {
     setProductsList([...products.sort((a, b) => { return b.price - a.price })]);
     }
     
     }
    
const productElements =(search(displayedProducts).map(product => 
<div key={product.id} className='product-cont'>
<Link to={`/products/${product.id}`}>
<img src={product.imageUrl} alt="" width={250}/>
<h4>{product.name}</h4>
       <br />
<h4>₹{product.price}</h4>
</Link>
</div>
))

return (
  <>

  <div className='search'>
<label htmlFor="search-form" >
  <div className='wrapper'>
  
 <input 
 
 type="search"
   name='search-form'
   id='search-form'
   className='search-input'
   placeholder='Search here for your desired products'
   value={q}
   onChange={(e) => setQ(e.target.value)} 
   /> 
  
</div>
<div className='filter-buttons'>
<button
onClick={() => handleFilterChange("type", "Headphones")}
className={
  `product-type Headphones
  ${typeFilter === "Headphones" ? "selected" : ""}`
}>
Headphones
</button>
<button
onClick={() => handleFilterChange("type", "Earbuds")}
className={
  `product-type Earbuds
  ${typeFilter === "Earbuds" ? "selected" : ""}`
}>
Earbuds
</button>
<button
onClick={() => handleFilterChange("type", "Speakers")}
className={
  `product-type Speakers
  ${typeFilter === "Speakers" ? "selected" : ""}`
}>
Speakers
</button>
<button
onClick={() => handleFilterChange("type", "Accessories")}
className={
  `product-type Accessories
  ${typeFilter === "Accessories" ? "selected" : ""}`
}>
 Accessories
</button>

{typeFilter ? (
<button
onClick={() => handleFilterChange("type", null)}
className={"product-type clear-filters"}
> 
Clear filter
</button>
) : null}
</div>
</label>
<div>
<select aria-label='form-select-sm' 
className="dropdown-filter" name="price"
onChange={(e) => sortProductsByPrice(e)}>
  <option  
  value="FilterByprice" >Filter By price</option>
  <option 
  value="LowToHigh">Low To High</option>
  <option 
  value="HighToLow">High To Low</option>
</select>     
</div>
  </div>
<div className='list'>
  {productElements}
</div> 
</>
)}

return(
  <>    
<React.Suspense fallback={<h2>Loading products...</h2>}>
     <Await resolve={dataPromise.products}>
       {renderElements}
     </Await>
  </React.Suspense>
 </> 

)
}


export default Products

 





    